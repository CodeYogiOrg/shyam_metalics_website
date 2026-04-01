import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField({ count = 800, radius = 8 }) {
  const pointsRef = useRef();

  const { positions, scales, speeds, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const speeds = new Float32Array(count);
    const offsets = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Distribute in a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (0.3 + Math.random() * 0.7);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      scales[i] = 0.3 + Math.random() * 0.7;
      speeds[i] = 0.1 + Math.random() * 0.4;

      offsets[i * 3] = Math.random() * Math.PI * 2;
      offsets[i * 3 + 1] = 0.5 + Math.random() * 2;
      offsets[i * 3 + 2] = 0.5 + Math.random() * 2;
    }

    return { positions, scales, speeds, offsets };
  }, [count, radius]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uSize: { value: 3.0 },
  }), []);

  const vertexShader = `
    uniform float uTime;
    uniform float uSize;
    attribute float aScale;
    attribute float aSpeed;
    attribute vec3 aOffset;
    varying float vAlpha;
    varying vec3 vColor;

    void main() {
      vec3 pos = position;
      float angle = uTime * aSpeed + aOffset.x;
      pos.x += cos(angle) * aOffset.y * 0.3;
      pos.y += sin(angle * 0.7) * aOffset.z * 0.3;
      pos.z += sin(angle * 0.5) * aOffset.y * 0.2;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = uSize * aScale * (200.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;

      vAlpha = aScale * 0.55;
      float colorMix = sin(uTime * 0.2 + aOffset.x) * 0.5 + 0.5;
      float hue = fract(aOffset.x * 0.16 + uTime * 0.04);
      vec3 colOrange = vec3(1.0, 0.42, 0.0);
      vec3 colPink   = vec3(1.0, 0.0, 0.43);
      vec3 colBlue   = vec3(0.23, 0.51, 0.96);
      vec3 particleColor = hue < 0.33 ? mix(colOrange, colPink, hue * 3.0) :
                           hue < 0.66 ? mix(colPink, colBlue, (hue - 0.33) * 3.0) :
                                        mix(colBlue, colOrange, (hue - 0.66) * 3.0);
      vColor = mix(particleColor, vec3(1.0), colorMix * 0.3);
    }
  `;

  const fragmentShader = `
    varying float vAlpha;
    varying vec3 vColor;
    void main() {
      float dist = length(gl_PointCoord - vec2(0.5));
      if (dist > 0.5) discard;
      float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
      gl_FragColor = vec4(vColor, alpha);
    }
  `;

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aScale"
          count={count}
          array={scales}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aSpeed"
          count={count}
          array={speeds}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aOffset"
          count={count}
          array={offsets}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
