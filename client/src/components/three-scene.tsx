import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const FloatingSoapBubbles = () => {
  const count = 25;
  const meshes = useRef<(THREE.Mesh | null)[]>([]);
  const positions = useRef<[number, number, number][]>([]);
  const speeds = useRef<number[]>([]);
  const scales = useRef<number[]>([]);

  for (let i = 0; i < count; i++) {
    positions.current[i] = [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 15,
    ];
    speeds.current[i] = Math.random() * 0.02 + 0.008;
    scales.current[i] = Math.random() * 0.5 + 0.15;
  }

  useFrame(() => {
    meshes.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.position.y += speeds.current[i];
        mesh.rotation.x += 0.008;
        mesh.rotation.z += 0.012;
        if (mesh.position.y > 10) {
          mesh.position.y = -10;
        }
      }
    });
  });

  return (
    <group>
      {Array.from({ length: count }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (meshes.current[i] = el)}
          position={positions.current[i]}
          scale={scales.current[i]}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshPhysicalMaterial
            color={i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#34d399" : "#f472b6"}
            transparent
            opacity={0.4}
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
};

const CleaningTools = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Sponge */}
      <Float speed={1.5} floatIntensity={0.4}>
        <mesh position={[3.5, 0, 0]} castShadow>
          <boxGeometry args={[1.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#f472b6" />
        </mesh>
      </Float>

      {/* Heart for care */}
      <Float speed={1.5} floatIntensity={0.4} rotationIntensity={0.3}>
        <mesh position={[-3.5, 0, 0]} castShadow>
          <torusGeometry args={[0.7, 0.18, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
      </Float>

      {/* Water drop / soap bottle */}
      <Float speed={1.5} floatIntensity={0.4}>
        <group position={[0, 2.2, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.65, 16, 16]} />
            <meshPhysicalMaterial
              color="#3b82f6"
              transparent
              opacity={0.75}
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
          <mesh position={[0, -0.6, 0]} castShadow>
            <cylinderGeometry args={[0.35, 0.5, 0.4, 16]} />
            <meshStandardMaterial color="#22c55e" />
          </mesh>
        </group>
      </Float>

      {/* Mop / Broom */}
      <Float speed={1.5} floatIntensity={0.3}>
        <group position={[1.8, -1.8, 0]}>
          <mesh position={[0, 1.2, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.08, 2.5, 12]} />
            <meshStandardMaterial color="#8b5a2b" />
          </mesh>
          <mesh position={[0, -0.3, 0]} castShadow>
            <boxGeometry args={[1.2, 0.6, 0.3]} />
            <meshStandardMaterial color="#f97316" />
          </mesh>
        </group>
      </Float>

      {/* Bucket */}
      <Float speed={1.5} floatIntensity={0.3}>
        <group position={[-1.8, -1.8, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.7, 0.6, 1, 16]} />
            <meshStandardMaterial color="#eab308" />
          </mesh>
          <mesh position={[0, 0.55, 0]} castShadow>
            <torusGeometry args={[0.65, 0.06, 12, 16]} />
            <meshStandardMaterial color="#eab308" />
          </mesh>
          <mesh position={[0, -0.2, 0]} castShadow>
            <cylinderGeometry args={[0.5, 0.5, 0.7, 16]} />
            <meshPhysicalMaterial
              color="#38bdf8"
              transparent
              opacity={0.7}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
};

const WelcomeText = () => {
  return (
    <Float speed={1} floatIntensity={0.2}>
      <Text
        position={[0, -4.2, 0]}
        fontSize={0.7}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        YSMN Complete Care
      </Text>
    </Float>
  );
};

export default function ThreeScene() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800">
      <Canvas camera={{ position: [0, 0, 12], fov: 55 }} shadows>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#f472b6" />
        <Stars radius={120} depth={60} count={6000} factor={4} saturation={0} fade speed={1.2} />
        <CleaningTools />
        <FloatingSoapBubbles />
        <WelcomeText />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
