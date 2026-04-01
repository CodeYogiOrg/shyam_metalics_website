import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { generateMorphTargets, SEGMENTS_H, SEGMENTS_V } from '../../utils/shapes';

// ─── Pure Silver Chrome Vertex Shader ─────────────────────
const vertexShader = `
  uniform float uTime;
  uniform float uMorphProgress;
  uniform float uNoiseAmplitude;
  uniform float uNoiseFrequency;
  uniform float uScale;

  attribute vec3 morphTarget;

  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying vec3 vViewDir;
  varying vec2 vUv;
  varying float vDisplacement;
  varying float vFresnel;

  vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
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
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vec3 morphed = mix(position, morphTarget, uMorphProgress);

    float noise = snoise(morphed * uNoiseFrequency + uTime * 0.2) * 0.7;
    float noise2 = snoise(morphed * uNoiseFrequency * 1.8 + uTime * 0.35) * 0.3;
    float totalNoise = (noise + noise2) * uNoiseAmplitude;

    vec3 displaced = morphed + normal * totalNoise;
    displaced *= uScale;

    vDisplacement = totalNoise;
    vNormal = normalMatrix * normal;
    vWorldPosition = (modelMatrix * vec4(displaced, 1.0)).xyz;
    vUv = uv;

    vec3 worldNormal = normalize(mat3(modelMatrix) * normal);
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    vViewDir = viewDir;
    vFresnel = pow(1.0 - max(dot(viewDir, worldNormal), 0.0), 2.2);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

// ─── Pure Silver White Chrome Fragment Shader ─────────────
const fragmentShader = `
  uniform float uTime;

  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying vec3 vViewDir;
  varying vec2 vUv;
  varying float vDisplacement;
  varying float vFresnel;

  void main() {
    vec3 V = normalize(vViewDir);
    vec3 N = normalize(vNormal);
    vec3 R = reflect(-V, N);

    // ── Pure silver base ──
    vec3 baseColor = vec3(0.88, 0.88, 0.9);

    // ── Silver environment reflection (bright white HDRI-like) ──
    float envY = R.y * 0.5 + 0.5;
    vec3 skyColor = mix(vec3(0.35, 0.37, 0.42), vec3(0.85, 0.87, 0.92), pow(envY, 0.6));
    vec3 groundColor = vec3(0.08, 0.08, 0.1);
    vec3 horizonColor = vec3(0.55, 0.56, 0.6);

    float horizonMask = 1.0 - pow(abs(R.y), 0.5);
    vec3 envColor = mix(
      mix(groundColor, skyColor, smoothstep(-0.3, 0.6, R.y)),
      horizonColor,
      horizonMask * 0.6
    );

    // High reflectivity — pure chrome mirror
    baseColor = mix(baseColor, envColor, 0.6);

    // ── Bright white Fresnel rim ──
    baseColor += vec3(1.0, 1.0, 1.0) * pow(vFresnel, 2.5) * 0.7;

    // ── Primary specular — razor-sharp white highlight ──
    vec3 L1 = normalize(vec3(1.5, 3.0, 2.0));
    vec3 H1 = normalize(V + L1);
    float spec1 = pow(max(dot(N, H1), 0.0), 600.0);
    baseColor += vec3(1.0) * spec1 * 3.0;

    // ── Secondary specular — bright silver from left ──
    vec3 L2 = normalize(vec3(-2.5, 1.5, -1.0));
    vec3 H2 = normalize(V + L2);
    float spec2 = pow(max(dot(N, H2), 0.0), 300.0);
    baseColor += vec3(0.95, 0.95, 1.0) * spec2 * 2.0;

    // ── Tertiary specular — soft fill from below ──
    vec3 L3 = normalize(vec3(0.5, -1.5, 2.5));
    vec3 H3 = normalize(V + L3);
    float spec3 = pow(max(dot(N, H3), 0.0), 150.0);
    baseColor += vec3(0.9, 0.9, 0.95) * spec3 * 1.2;

    // ── Fourth specular — back rim for shape definition ──
    vec3 L4 = normalize(vec3(-0.5, 0.5, -3.0));
    vec3 H4 = normalize(V + L4);
    float spec4 = pow(max(dot(N, H4), 0.0), 200.0);
    baseColor += vec3(0.85, 0.88, 1.0) * spec4 * 1.5;

    // ── Diffuse wrap for shape readability ──
    float diffuse = dot(N, normalize(vec3(0.3, 1.0, 0.6))) * 0.5 + 0.5;
    baseColor *= 0.78 + 0.22 * diffuse;

    // ── Soft AO ──
    float ao = smoothstep(-0.12, 0.12, vDisplacement) * 0.25 + 0.75;
    baseColor *= ao;

    // ── Slight brightness boost for pure silver shine ──
    baseColor = pow(baseColor, vec3(0.95));

    gl_FragColor = vec4(baseColor, 1.0);
  }
`;

export default function LiquidMetalShape({ scrollProgress = 0, mouseX = 0, mouseY = 0, scale = 1 }) {
  const meshRef = useRef();
  const materialRef = useRef();

  const { targets, baseGeometry, uniforms } = useMemo(() => {
    const { targets } = generateMorphTargets();
    const baseGeometry = new THREE.SphereGeometry(1.5, SEGMENTS_H, SEGMENTS_V);

    baseGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(targets[0].slice(), 3)
    );
    baseGeometry.setAttribute(
      'morphTarget',
      new THREE.BufferAttribute(targets[1].slice(), 3)
    );
    baseGeometry.computeVertexNormals();

    const uniforms = {
      uTime: { value: 0 },
      uMorphProgress: { value: 0 },
      uNoiseAmplitude: { value: 0.03 },
      uNoiseFrequency: { value: 1.0 },
      uScale: { value: scale },
    };

    return { targets, baseGeometry, uniforms };
  }, [scale]);

  const currentShape = useRef(0);
  const targetShape = useRef(1);
  const autoMorphTimer = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current || !materialRef.current) return;

    const time = state.clock.elapsedTime;
    uniforms.uTime.value = time;

    // 5s morph + 3.5s hold
    autoMorphTimer.current += delta;
    const morphDuration = 5;
    const holdDuration = 3.5;
    const cycleDuration = morphDuration + holdDuration;

    if (autoMorphTimer.current >= cycleDuration) {
      autoMorphTimer.current = 0;
      currentShape.current = targetShape.current;
      targetShape.current = (targetShape.current + 1) % targets.length;

      const posAttr = new THREE.BufferAttribute(targets[currentShape.current].slice(), 3);
      posAttr.needsUpdate = true;
      meshRef.current.geometry.setAttribute('position', posAttr);

      const morphAttr = new THREE.BufferAttribute(targets[targetShape.current].slice(), 3);
      morphAttr.needsUpdate = true;
      meshRef.current.geometry.setAttribute('morphTarget', morphAttr);

      meshRef.current.geometry.computeVertexNormals();
    }

    // Quintic ease-in-out for butter-smooth morphing
    const morphT = Math.min(autoMorphTimer.current / morphDuration, 1);
    const eased = morphT < 0.5
      ? 16 * morphT * morphT * morphT * morphT * morphT
      : 1 - Math.pow(-2 * morphT + 2, 5) / 2;
    uniforms.uMorphProgress.value = eased;

    // Very subtle noise — shape stays clean
    uniforms.uNoiseAmplitude.value = 0.02 + eased * (1 - eased) * 0.08;

    // Slow elegant 360° rotation
    meshRef.current.rotation.y = time * 0.12 + mouseX * 0.15;
    meshRef.current.rotation.x = Math.sin(time * 0.06) * 0.06 + mouseY * 0.1;
  });

  return (
    <mesh ref={meshRef} geometry={baseGeometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
