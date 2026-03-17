"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BELT_WIDTH = 4.0;
const BELT_LENGTH = 30;
const RAIL_HEIGHT = 0.15;
const ROLLER_COUNT = 20;
const ROLLER_RADIUS = 0.22;
const BELT_SPEED = 0.175; // Match box speed

export default function ConveyorBelt() {
  const rollerRefs = useRef<THREE.Mesh[]>([]);
  const stripeRefs = useRef<THREE.Mesh[]>([]);
  const stripeCount = 60;
  const stripeSpacing = BELT_LENGTH / stripeCount;

  // Create roller texture with grooves
  const rollerMaterial = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 32;
    const ctx = canvas.getContext("2d")!;
    // Base metallic color
    ctx.fillStyle = "#8a8279";
    ctx.fillRect(0, 0, 128, 32);
    // Grooves
    for (let i = 0; i < 32; i += 4) {
      ctx.fillStyle = i % 8 === 0 ? "#6a6259" : "#9a9490";
      ctx.fillRect(0, i, 128, 2);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 3);
    return new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.3,
      metalness: 0.85,
    });
  }, []);

  useFrame((_, delta) => {
    const dx = BELT_SPEED * delta * 60;

    // Rotate rollers visibly
    rollerRefs.current.forEach((roller) => {
      if (roller) {
        // rotation.z for cylinder rotated along X axis = visible spin
        roller.rotation.y += (dx / ROLLER_RADIUS) * 0.06;
      }
    });

    // Move belt stripes to simulate belt surface movement
    stripeRefs.current.forEach((stripe) => {
      if (!stripe) return;
      stripe.position.x -= dx;
      // Wrap around
      if (stripe.position.x < -BELT_LENGTH / 2) {
        stripe.position.x += BELT_LENGTH;
      }
    });
  });

  return (
    <group>
      {/* Belt surface - dark rubber */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[BELT_LENGTH, 0.06, BELT_WIDTH]} />
        <meshStandardMaterial
          color="#2a2a2a"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* Moving belt stripes - these animate to show belt motion */}
      {Array.from({ length: stripeCount }).map((_, i) => (
        <mesh
          key={`stripe-${i}`}
          ref={(el) => {
            if (el) stripeRefs.current[i] = el;
          }}
          position={[i * stripeSpacing - BELT_LENGTH / 2, 0.032, 0]}
          receiveShadow
        >
          <boxGeometry args={[0.06, 0.002, BELT_WIDTH - 0.3]} />
          <meshStandardMaterial
            color="#4a4a4a"
            roughness={0.7}
            metalness={0.1}
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

      {/* Belt underside - covers rollers from below */}
      <mesh position={[0, -0.32, 0]} receiveShadow>
        <boxGeometry args={[BELT_LENGTH, 0.04, BELT_WIDTH]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} metalness={0.05} />
      </mesh>

      {/* Side panels - tall enough to fully enclose rollers */}
      <mesh position={[0, -0.15, -BELT_WIDTH / 2 - 0.02]} castShadow>
        <boxGeometry args={[BELT_LENGTH, 0.38, 0.06]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.4} metalness={0.7} />
      </mesh>
      <mesh position={[0, -0.15, BELT_WIDTH / 2 + 0.02]} castShadow>
        <boxGeometry args={[BELT_LENGTH, 0.38, 0.06]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Rollers - hidden inside the belt housing, still animate for mechanical feel */}
      {Array.from({ length: ROLLER_COUNT }).map((_, i) => {
        const x =
          (i / (ROLLER_COUNT - 1)) * (BELT_LENGTH - 1.5) -
          (BELT_LENGTH - 1.5) / 2;
        return (
          <mesh
            key={`roller-${i}`}
            ref={(el) => {
              if (el) rollerRefs.current[i] = el;
            }}
            position={[x, -0.16, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            material={rollerMaterial}
          >
            <cylinderGeometry
              args={[ROLLER_RADIUS, ROLLER_RADIUS, BELT_WIDTH - 0.1, 16]}
            />
          </mesh>
        );
      })}

      {/* End drums - visible at both ends of the conveyor */}
      {[-(BELT_LENGTH / 2 - 0.15), BELT_LENGTH / 2 - 0.15].map((x, idx) => (
        <mesh
          key={`drum-${idx}`}
          position={[x, -0.15, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.18, 0.18, BELT_WIDTH + 0.08, 20]} />
          <meshStandardMaterial color="#7a7270" roughness={0.25} metalness={0.9} />
        </mesh>
      ))}

      {/* Support legs */}
      {[-10, -3.3, 3.3, 10].map((x) =>
        [-BELT_WIDTH / 2 - 0.2, BELT_WIDTH / 2 + 0.2].map((z) => (
          <mesh key={`leg-${x}-${z}`} position={[x, -0.6, z]} castShadow>
            <boxGeometry args={[0.1, 0.9, 0.08]} />
            <meshStandardMaterial color="#2a2a2a" roughness={0.5} metalness={0.6} />
          </mesh>
        ))
      )}

      {/* Cross braces between legs */}
      {[-10, -3.3, 3.3, 10].map((x) => (
        <mesh key={`brace-${x}`} position={[x, -0.85, 0]} castShadow>
          <boxGeometry args={[0.06, 0.06, BELT_WIDTH + 0.4]} />
          <meshStandardMaterial color="#3a3a3a" roughness={0.5} metalness={0.6} />
        </mesh>
      ))}

      {/* Ground plane for shadows */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]} receiveShadow>
        <planeGeometry args={[40, 20]} />
        <shadowMaterial opacity={0.15} />
      </mesh>
    </group>
  );
}
