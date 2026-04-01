// Custom vertex shader for liquid metal morphing with noise displacement
export const morphVertexShader = `
  uniform float uTime;
  uniform float uMorphProgress;
  uniform float uNoiseAmplitude;
  uniform float uNoiseFrequency;
  uniform float uHover;

  attribute vec3 morphTarget;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPosition;
  varying vec2 vUv;
  varying float vDisplacement;

  //
  // Simplex 3D noise (GLSL)
  //
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    // Morph between current position and target
    vec3 morphed = mix(position, morphTarget, uMorphProgress);

    // Apply noise displacement
    float noise = snoise(morphed * uNoiseFrequency + uTime * 0.3);
    float noise2 = snoise(morphed * uNoiseFrequency * 2.0 + uTime * 0.5) * 0.5;
    float totalNoise = (noise + noise2) * uNoiseAmplitude;

    // Add hover effect
    float hoverNoise = snoise(morphed * 3.0 + uTime * 0.8) * uHover * 0.15;

    vec3 displaced = morphed + normal * (totalNoise + hoverNoise);

    vDisplacement = totalNoise;
    vNormal = normalMatrix * normal;
    vPosition = displaced;
    vWorldPosition = (modelMatrix * vec4(displaced, 1.0)).xyz;
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

// Custom fragment shader for liquid chrome material
export const morphFragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform vec3 uColor4;
  uniform float uFresnelPower;
  uniform samplerCube uEnvMap;
  uniform float uEnvMapIntensity;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPosition;
  varying vec2 vUv;
  varying float vDisplacement;

  void main() {
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    vec3 normal = normalize(vNormal);

    // Fresnel effect for edge glow
    float fresnel = pow(1.0 - max(dot(viewDirection, normal), 0.0), uFresnelPower);

    // Environment reflection
    vec3 reflectDir = reflect(-viewDirection, normal);
    vec4 envColor = textureCube(uEnvMap, reflectDir);

    // Base chrome color with displacement-based coloring
    vec3 baseColor = mix(uColor1, uColor2, fresnel);

    // Add iridescence based on view angle and displacement
    float iridescence = sin(vDisplacement * 10.0 + uTime * 0.5) * 0.5 + 0.5;
    vec3 iriColor = mix(uColor3, uColor4, iridescence);
    baseColor = mix(baseColor, iriColor, fresnel * 0.4);

    // Combine with environment reflections
    vec3 finalColor = mix(baseColor, envColor.rgb * uEnvMapIntensity, 0.7);

    // Add rim lighting (orange)
    float rim = pow(fresnel, 3.0);
    finalColor += vec3(1.0, 0.42, 0.0) * rim * 0.8;

    // Add specular highlights
    vec3 halfDir = normalize(viewDirection + vec3(0.5, 1.0, 0.5));
    float spec = pow(max(dot(normal, halfDir), 0.0), 128.0);
    finalColor += vec3(1.0) * spec * 1.5;

    // Second specular from opposite side
    vec3 halfDir2 = normalize(viewDirection + vec3(-0.3, -0.5, 0.8));
    float spec2 = pow(max(dot(normal, halfDir2), 0.0), 64.0);
    finalColor += uColor3 * spec2 * 0.8;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// Particle vertex shader
export const particleVertexShader = `
  uniform float uTime;
  uniform float uSize;

  attribute float aScale;
  attribute float aSpeed;
  attribute vec3 aOffset;

  varying float vAlpha;
  varying vec3 vColor;

  void main() {
    vec3 pos = position;

    // Orbital motion
    float angle = uTime * aSpeed + aOffset.x;
    pos.x += cos(angle) * aOffset.y;
    pos.y += sin(angle * 0.7) * aOffset.z;
    pos.z += sin(angle * 0.5) * aOffset.y * 0.5;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    gl_PointSize = uSize * aScale * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;

    vAlpha = aScale * 0.6;
    float colorMix = sin(uTime * 0.3 + aOffset.x) * 0.5 + 0.5;
    vColor = mix(vec3(0.0, 0.83, 1.0), vec3(1.0, 0.42, 0.0), colorMix);
  }
`;

export const particleFragmentShader = `
  varying float vAlpha;
  varying vec3 vColor;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
    gl_FragColor = vec4(vColor, alpha);
  }
`;
