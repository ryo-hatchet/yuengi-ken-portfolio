"use client";

import { useRef, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type ConveyorAnimationOptions = {
  count: number;
  speed?: number;
  spacing?: number;
  range?: number;
};

export function useConveyorAnimation({
  count,
  speed = 0.8,
  spacing = 3.2,
  range,
}: ConveyorAnimationOptions) {
  const groupRefs = useRef<(THREE.Group | null)[]>([]);
  const hoveredIndex = useRef<number | null>(null);
  const totalLength = range ?? count * spacing;

  const setRef = useCallback(
    (index: number) => (el: THREE.Group | null) => {
      groupRefs.current[index] = el;
    },
    []
  );

  const getInitialX = useCallback(
    (index: number) => {
      return index * spacing - totalLength / 2;
    },
    [spacing, totalLength]
  );

  useFrame((_, delta) => {
    const currentSpeed =
      hoveredIndex.current !== null ? speed * 0.15 : speed;
    const dx = currentSpeed * delta * 60;

    groupRefs.current.forEach((group) => {
      if (!group) return;
      group.position.x -= dx;

      // Wrap around
      if (group.position.x < -totalLength / 2 - spacing) {
        group.position.x += totalLength + spacing;
      }
    });
  });

  return { setRef, getInitialX, hoveredIndex };
}
