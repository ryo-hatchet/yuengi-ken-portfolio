"use client";

import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import ConveyorBelt from "./ConveyorBelt";
import PackageBox from "./PackageBox";
import { useConveyorAnimation } from "./useConveyorAnimation";

type WorkData = {
  slug: string;
  title: string;
  thumbnail: string;
  tags: string[];
};

type ConveyorSceneProps = {
  works: WorkData[];
};

export default function ConveyorScene({ works }: ConveyorSceneProps) {
  const { setRef, getInitialX, hoveredIndex } = useConveyorAnimation({
    count: works.length,
    speed: 0.6,
    spacing: 3.5,
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[8, 12, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight
        position={[-5, 8, -3]}
        intensity={0.3}
        color="#FFE0D0"
      />
      {/* Accent spot light */}
      <spotLight
        position={[0, 8, 0]}
        angle={0.5}
        penumbra={0.8}
        intensity={0.6}
        color="#FF5722"
        castShadow={false}
      />
      {/* Rim light */}
      <pointLight position={[-10, 3, -5]} intensity={0.2} color="#E8E0D8" />

      <Suspense fallback={null}>
        <Environment preset="city" environmentIntensity={0.3} />
      </Suspense>

      {/* Conveyor Belt */}
      <ConveyorBelt />

      {/* Package Boxes */}
      {works.map((work, i) => (
        <PackageBox
          key={work.slug}
          slug={work.slug}
          title={work.title}
          thumbnail={work.thumbnail}
          tags={work.tags}
          position={[getInitialX(i), 0, 0]}
          groupRef={setRef(i)}
          onHoverStart={() => {
            hoveredIndex.current = i;
          }}
          onHoverEnd={() => {
            hoveredIndex.current = null;
          }}
        />
      ))}
    </>
  );
}
