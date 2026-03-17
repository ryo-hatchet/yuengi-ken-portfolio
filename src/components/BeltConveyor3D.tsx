"use client";

import { Canvas } from "@react-three/fiber";
import ConveyorScene from "./conveyor/ConveyorScene";

type WorkData = {
  slug: string;
  title: string;
  thumbnail: string;
  tags: string[];
};

type BeltConveyor3DProps = {
  works: WorkData[];
};

export default function BeltConveyor3D({ works }: BeltConveyor3DProps) {
  return (
    <div className="w-full h-[50vh] sm:h-[55vh] md:h-[60vh] relative">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{
          position: [10, 7, 10],
          fov: 32,
          near: 0.1,
          far: 100,
        }}
        style={{ background: "transparent" }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ConveyorScene works={works} />
      </Canvas>
    </div>
  );
}
