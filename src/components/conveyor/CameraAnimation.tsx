"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Camera positions to cycle through
const CAMERA_POSES = [
  { position: [10, 7, 10], lookAt: [0, 0.5, 0] },      // Classic isometric
  { position: [16, 1.2, 0], lookAt: [-4, 0.8, 0] },    // Horizontal side view
  { position: [14, 4, 6], lookAt: [-2, 0.8, 0] },      // Low angle side
  { position: [0, 10, 12], lookAt: [0, 0, 0] },        // Top-down angled
  { position: [0, 1.5, 16], lookAt: [0, 0.8, 0] },     // Horizontal front view
  { position: [-8, 5, 10], lookAt: [2, 0.5, 0] },      // Opposite side
  { position: [6, 3, 14], lookAt: [0, 1, 0] },         // Close front
] as const;

const TRANSITION_DURATION = 3.0; // seconds for smooth transition
const HOLD_DURATION = 8.0; // seconds to hold each angle

export default function CameraAnimation() {
  const { camera } = useThree();
  const currentIndex = useRef(0);
  const nextIndex = useRef(1);
  const timer = useRef(0);
  const phase = useRef<"hold" | "transition">("hold");

  const currentPos = useRef(new THREE.Vector3(10, 7, 10));
  const currentLookAt = useRef(new THREE.Vector3(0, 0.5, 0));
  const targetPos = useRef(new THREE.Vector3(10, 7, 10));
  const targetLookAt = useRef(new THREE.Vector3(0, 0.5, 0));

  useFrame((_, delta) => {
    timer.current += delta;

    if (phase.current === "hold") {
      if (timer.current >= HOLD_DURATION) {
        // Start transition to next pose
        phase.current = "transition";
        timer.current = 0;
        nextIndex.current = (currentIndex.current + 1) % CAMERA_POSES.length;
        const next = CAMERA_POSES[nextIndex.current];
        targetPos.current.set(next.position[0], next.position[1], next.position[2]);
        targetLookAt.current.set(next.lookAt[0], next.lookAt[1], next.lookAt[2]);
      }
    } else {
      // Transition phase
      const t = Math.min(timer.current / TRANSITION_DURATION, 1);
      // Smooth easing (ease-in-out cubic)
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      currentPos.current.lerp(targetPos.current, eased * 0.02);
      currentLookAt.current.lerp(targetLookAt.current, eased * 0.02);

      camera.position.copy(currentPos.current);
      camera.lookAt(currentLookAt.current);

      if (t >= 1) {
        // Transition complete
        phase.current = "hold";
        timer.current = 0;
        currentIndex.current = nextIndex.current;
        const pose = CAMERA_POSES[currentIndex.current];
        currentPos.current.set(pose.position[0], pose.position[1], pose.position[2]);
        currentLookAt.current.set(pose.lookAt[0], pose.lookAt[1], pose.lookAt[2]);
      }
    }
  });

  return null;
}
