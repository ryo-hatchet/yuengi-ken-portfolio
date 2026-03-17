"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BELT_WIDTH = 4.0;
const BELT_LENGTH = 30;
const RAIL_HEIGHT = 0.15;
const ROLLER_COUNT = 16;
const ROLLER_RADIUS = 0.12;

export default function ConveyorBelt() {
  const beltRef = useRef<THREE.Mesh>(null);
  const rollerRefs = useRef<THREE.Mesh[]>([]);

  useFrame((_, delta) => {
    // Animate belt texture offset
    if (beltRef.current) {
      const mat = beltRef.current.material as THREE.MeshStandardMaterial;
      if (mat.map) {
        mat.map.offset.x -= delta * 0.3;
      }
    }
    // Rotate rollers
    rollerRefs.current.forEach((roller) => {
      if (roller) roller.rotation.z -= delta * 3;
    });
  });

  return (
    <group>
      {/* Belt surface */}
      <mesh ref={beltRef} position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[BELT_LENGTH, 0.05, BELT_WIDTH]} />
        <meshStandardMaterial
          color="#3a3a3a"
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>

      {/* Belt stripes - subtle pattern */}
      {Array.from({ length: 40 }).map((_, i) => (
        <mesh
          key={`stripe-${i}`}
          position={[i * 0.75 - 15, 0.026, 0]}
          receiveShadow
        >
          <boxGeometry args={[0.08, 0.001, BELT_WIDTH - 0.2]} />
          <meshStandardMaterial
            color="#4a4a4a"
            roughness={0.7}
            metalness={0.15}
          />
        </mesh>
      ))}

      {/* Left rail */}
      <mesh position={[0, RAIL_HEIGHT / 2, -BELT_WIDTH / 2 - 0.08]} castShadow>
        <boxGeometry args={[BELT_LENGTH, RAIL_HEIGHT, 0.12]} />
        <meshStandardMaterial
          color="#b8b0a8"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Right rail */}
      <mesh position={[0, RAIL_HEIGHT / 2, BELT_WIDTH / 2 + 0.08]} castShadow>
        <boxGeometry args={[BELT_LENGTH, RAIL_HEIGHT, 0.12]} />
        <meshStandardMaterial
          color="#b8b0a8"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Side panels - industrial look */}
      <mesh position={[0, -0.15, -BELT_WIDTH / 2 - 0.2]} castShadow>
        <boxGeometry args={[BELT_LENGTH, 0.35, 0.04]} />
        <meshStandardMaterial
          color="#2a2a2a"
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>
      <mesh position={[0, -0.15, BELT_WIDTH / 2 + 0.2]} castShadow>
        <boxGeometry args={[BELT_LENGTH, 0.35, 0.04]} />
        <meshStandardMaterial
          color="#2a2a2a"
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>

      {/* Rollers */}
      {Array.from({ length: ROLLER_COUNT }).map((_, i) => {
        const x =
          (i / (ROLLER_COUNT - 1)) * (BELT_LENGTH - 2) - (BELT_LENGTH - 2) / 2;
        return (
          <mesh
            key={`roller-${i}`}
            ref={(el) => {
              if (el) rollerRefs.current[i] = el;
            }}
            position={[x, -0.08, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            castShadow
          >
            <cylinderGeometry
              args={[ROLLER_RADIUS, ROLLER_RADIUS, BELT_WIDTH + 0.1, 12]}
            />
            <meshStandardMaterial
              color="#9a9490"
              roughness={0.3}
              metalness={0.85}
            />
          </mesh>
        );
      })}

      {/* Support legs */}
      {[-10, -3.3, 3.3, 10].map((x) =>
        [-BELT_WIDTH / 2 - 0.2, BELT_WIDTH / 2 + 0.2].map((z) => (
          <mesh
            key={`leg-${x}-${z}`}
            position={[x, -0.6, z]}
            castShadow
          >
            <boxGeometry args={[0.1, 0.9, 0.08]} />
            <meshStandardMaterial
              color="#2a2a2a"
              roughness={0.5}
              metalness={0.6}
            />
          </mesh>
        ))
      )}

      {/* Ground plane for shadows */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]} receiveShadow>
        <planeGeometry args={[40, 20]} />
        <shadowMaterial opacity={0.15} />
      </mesh>
    </group>
  );
}
