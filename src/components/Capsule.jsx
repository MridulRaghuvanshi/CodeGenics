// Capsule.jsx
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export default function Capsule() {
  const capsuleRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Auto-rotate when hovered
  useFrame(() => {
    if (hovered) {
      capsuleRef.current.rotation.y += 0.01;
      capsuleRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group
      ref={capsuleRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Environment preset="sunset" />

      {/* Top metallic part */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 1, 64]} />
        <meshStandardMaterial
          color={"#a100ff"}
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* Bottom transparent part */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 1, 64]} />
        <meshPhysicalMaterial
          color="#d7b3ff"
          transparent={true}
          opacity={0.5}
          roughness={0.1}
          transmission={0.9}
        />
      </mesh>

      {/* Floating beads inside capsule */}
      {Array.from({ length: 25 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 0.6,
            (Math.random() - 0.5) * 1,
            (Math.random() - 0.5) * 0.6,
          ]}
        >
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color={i % 2 ? "#3c0080" : "#7700ff"} />
        </mesh>
      ))}
    </group>
  );
}