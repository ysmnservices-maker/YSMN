import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const SubtleFloatingShapes = () => {
  const count = 15;
  const meshes = useRef<(THREE.Mesh | null)[]>([]);
  const positions = useRef<[number, number, number][]>([]);
  const speeds = useRef<[number, number, number][]>([]);
  const types = useRef<("sphere" | "box" | "torus")[]>([]);
  
  for (let i = 0; i < count; i++) {
    positions.current[i] = [
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10 - 15,
    ];
    speeds.current[i] = [
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01,
    ];
    types.current[i] = ["sphere", "box", "torus"][Math.floor(Math.random() * 3)] as any;
  }

  useFrame(() => {
    meshes.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.position.x += speeds.current[i][0];
        mesh.position.y += speeds.current[i][1];
        mesh.position.z += speeds.current[i][2];
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.007;
        
        // Bounce back when hitting boundaries
        if (Math.abs(mesh.position.x) > 15) speeds.current[i][0] *= -1;
        if (Math.abs(mesh.position.y) > 10) speeds.current[i][1] *= -1;
        if (mesh.position.z > -5 || mesh.position.z < -25) speeds.current[i][2] *= -1;
      }
    });
  });

  return (
    <group>
      {Array.from({ length: count }).map((_, i) => {
        const type = types.current[i];
        return (
          <Float key={i} speed={0.5} floatIntensity={0.3} rotationIntensity={0.2}>
            <mesh
              ref={(el) => (meshes.current[i] = el)}
              position={positions.current[i]}
            >
              {type === "sphere" && <sphereGeometry args={[0.8, 16, 16]} />}
              {type === "box" && <boxGeometry args={[1, 1, 1]} />}
              {type === "torus" && <torusGeometry args={[0.5, 0.15, 8, 16]} />}
              <meshBasicMaterial
                color={i % 4 === 0 ? "#60a5fa" : i % 4 === 1 ? "#34d399" : i % 4 === 2 ? "#f472b6" : "#eab308"}
                transparent
                opacity={0.12}
                depthWrite={false}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
};

export default function Subtle3DBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
        <SubtleFloatingShapes />
      </Canvas>
    </div>
  );
}
