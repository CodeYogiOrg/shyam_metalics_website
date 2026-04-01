import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import LiquidMetalShape from './LiquidMetalShape';
import ParticleField from './ParticleField';

function CameraRig({ mouseX, mouseY, scrollProgress }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    // Smooth, slow camera follow — luxury feel
    const targetX = mouseX * 0.5;
    const targetY = mouseY * 0.3;
    const targetZ = 5.5 - scrollProgress * 1.5;

    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.y += (targetY - camera.position.y) * 0.02;
    camera.position.z += (targetZ - camera.position.z) * 0.02;

    camera.lookAt(target.current);
  });

  return null;
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.12} />
      {/* Key light — bright white from upper right */}
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.5}
        color="#ffffff"
      />
      {/* Fill light — cool silver from left */}
      <directionalLight
        position={[-5, 2, -3]}
        intensity={0.7}
        color="#e0e7ff"
      />
      {/* Accent — silver from below */}
      <pointLight
        position={[2, -3, 3]}
        intensity={1.2}
        color="#e2e8f0"
        distance={14}
      />
      {/* Back rim — white for silver edge glow */}
      <pointLight
        position={[-2, 1, -5]}
        intensity={1.0}
        color="#f1f5f9"
        distance={14}
      />
    </>
  );
}

// ─── Animated 3D background glow orbs (orange, pink, blue) ───
function BackgroundGlows() {
  const orangeRef = useRef();
  const pinkRef = useRef();
  const blueRef = useRef();
  const orange2Ref = useRef();
  const pink2Ref = useRef();
  const blue2Ref = useRef();

  const glowMaterial = useMemo(() => {
    return (color, opacity) => new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(color) },
        uOpacity: { value: opacity },
        uTime: { value: 0 },
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying float vDepth;
        void main() {
          vUv = uv;
          vec3 pos = position;
          // 3D wave distortion
          pos.z += sin(pos.x * 2.0 + uTime * 0.5) * 0.3;
          pos.z += cos(pos.y * 1.5 + uTime * 0.4) * 0.2;
          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          vDepth = -mvPos.z;
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        uniform float uTime;
        varying vec2 vUv;
        varying float vDepth;
        void main() {
          vec2 uv = vUv - vec2(0.5);
          // Animated pulsing glow
          float pulse = 1.0 + sin(uTime * 0.8) * 0.15;
          float dist = length(uv) * pulse;
          float glow = smoothstep(0.5, 0.0, dist);
          glow = pow(glow, 1.5);
          // Depth-based fade for 3D feel
          float depthFade = smoothstep(20.0, 5.0, vDepth);
          // Animated color shift
          float shift = sin(uTime * 0.3 + uv.x * 3.0) * 0.1;
          vec3 col = uColor + vec3(shift, -shift * 0.5, shift * 0.3);
          gl_FragColor = vec4(col, glow * uOpacity * depthFade);
        }
      `,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  const orangeMat = useMemo(() => glowMaterial('#FF6B00', 0.22), [glowMaterial]);
  const pinkMat = useMemo(() => glowMaterial('#FF006E', 0.18), [glowMaterial]);
  const blueMat = useMemo(() => glowMaterial('#3B82F6', 0.20), [glowMaterial]);
  const orange2Mat = useMemo(() => glowMaterial('#FF8533', 0.12), [glowMaterial]);
  const pink2Mat = useMemo(() => glowMaterial('#FF006E', 0.10), [glowMaterial]);
  const blue2Mat = useMemo(() => glowMaterial('#3B82F6', 0.11), [glowMaterial]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Update time uniforms for all materials
    [orangeMat, pinkMat, blueMat, orange2Mat, pink2Mat, blue2Mat].forEach(m => {
      m.uniforms.uTime.value = t;
    });

    // Primary orbs — large, close, slow orbit
    if (orangeRef.current) {
      orangeRef.current.position.x = 4.0 + Math.sin(t * 0.12) * 2.0;
      orangeRef.current.position.y = 2.5 + Math.cos(t * 0.1) * 1.5;
      orangeRef.current.position.z = -5 + Math.sin(t * 0.08) * 1.5;
      orangeRef.current.rotation.z = t * 0.02;
    }
    if (pinkRef.current) {
      pinkRef.current.position.x = -3.5 + Math.cos(t * 0.11) * 2.0;
      pinkRef.current.position.y = -1.0 + Math.sin(t * 0.14) * 1.5;
      pinkRef.current.position.z = -4 + Math.cos(t * 0.07) * 1.5;
      pinkRef.current.rotation.z = -t * 0.025;
    }
    if (blueRef.current) {
      blueRef.current.position.x = 1.0 + Math.sin(t * 0.09) * 2.5;
      blueRef.current.position.y = -3.5 + Math.cos(t * 0.12) * 1.2;
      blueRef.current.position.z = -6 + Math.sin(t * 0.06) * 2.0;
      blueRef.current.rotation.z = t * 0.015;
    }

    // Secondary orbs — smaller, farther, different orbit
    if (orange2Ref.current) {
      orange2Ref.current.position.x = -2.0 + Math.cos(t * 0.08) * 3.0;
      orange2Ref.current.position.y = 3.5 + Math.sin(t * 0.06) * 1.0;
      orange2Ref.current.position.z = -9 + Math.cos(t * 0.05) * 1.5;
    }
    if (pink2Ref.current) {
      pink2Ref.current.position.x = 3.0 + Math.sin(t * 0.07) * 2.0;
      pink2Ref.current.position.y = -4.0 + Math.cos(t * 0.09) * 1.5;
      pink2Ref.current.position.z = -10 + Math.sin(t * 0.04) * 2.0;
    }
    if (blue2Ref.current) {
      blue2Ref.current.position.x = -4.0 + Math.cos(t * 0.1) * 2.0;
      blue2Ref.current.position.y = 0.5 + Math.sin(t * 0.08) * 2.0;
      blue2Ref.current.position.z = -8 + Math.cos(t * 0.06) * 1.5;
    }
  });

  return (
    <>
      {/* Primary large glow orbs */}
      <mesh ref={orangeRef} position={[4, 2.5, -5]} material={orangeMat}>
        <planeGeometry args={[14, 14]} />
      </mesh>
      <mesh ref={pinkRef} position={[-3.5, -1, -4]} material={pinkMat}>
        <planeGeometry args={[12, 12]} />
      </mesh>
      <mesh ref={blueRef} position={[1, -3.5, -6]} material={blueMat}>
        <planeGeometry args={[16, 16]} />
      </mesh>
      {/* Secondary smaller depth orbs */}
      <mesh ref={orange2Ref} position={[-2, 3.5, -9]} material={orange2Mat}>
        <planeGeometry args={[10, 10]} />
      </mesh>
      <mesh ref={pink2Ref} position={[3, -4, -10]} material={pink2Mat}>
        <planeGeometry args={[8, 8]} />
      </mesh>
      <mesh ref={blue2Ref} position={[-4, 0.5, -8]} material={blue2Mat}>
        <planeGeometry args={[11, 11]} />
      </mesh>
    </>
  );
}

export default function Scene({ scrollProgress = 0, mouseX = 0, mouseY = 0 }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#09090b', 1);
        }}
      >
        <color attach="background" args={['#09090b']} />
        <fog attach="fog" args={['#09090b', 12, 35]} />

        <CameraRig mouseX={mouseX} mouseY={mouseY} scrollProgress={scrollProgress} />
        <Lights />
        <BackgroundGlows />

        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
          <LiquidMetalShape
            scrollProgress={scrollProgress}
            mouseX={mouseX}
            mouseY={mouseY}
            scale={1}
          />
        </Float>

        <ParticleField count={350} radius={8} />
      </Canvas>
    </div>
  );
}
