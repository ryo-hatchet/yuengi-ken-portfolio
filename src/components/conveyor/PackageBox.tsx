"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Html, RoundedBox } from "@react-three/drei";
import { useRouter } from "next/navigation";
import * as THREE from "three";

type PackageBoxProps = {
  slug: string;
  title: string;
  thumbnail: string;
  tags: string[];
  position: [number, number, number];
  groupRef: (el: THREE.Group | null) => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
};

const BOX_WIDTH = 2.2;
const BOX_HEIGHT = 1.6;
const BOX_DEPTH = 2.0;

function BoxContent({
  slug,
  title,
  thumbnail,
  tags,
  position,
  groupRef,
  onHoverStart,
  onHoverEnd,
}: PackageBoxProps) {
  const router = useRouter();
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const targetY = useRef(0.85);

  // Load thumbnail texture
  const texture = useMemo(() => {
    if (!thumbnail) return null;
    const loader = new THREE.TextureLoader();
    const tex = loader.load(thumbnail);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [thumbnail]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const target = hovered ? 1.15 : 0.85;
    targetY.current = THREE.MathUtils.lerp(targetY.current, target, delta * 8);
    meshRef.current.position.y = targetY.current;
  });

  const handlePointerOver = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setHovered(true);
    onHoverStart();
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHoverEnd();
    document.body.style.cursor = "auto";
  };

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    router.push(`/works/${slug}`);
  };

  // Materials for each face
  const materials = useMemo(() => {
    const cardboard = new THREE.MeshStandardMaterial({
      color: "#FAF8F6",
      roughness: 0.6,
      metalness: 0.05,
    });
    const cardboardSide = new THREE.MeshStandardMaterial({
      color: "#F0EDEA",
      roughness: 0.65,
      metalness: 0.05,
    });
    const cardboardTop = new THREE.MeshStandardMaterial({
      color: "#FFFFFF",
      roughness: 0.55,
      metalness: 0.05,
    });

    const frontMat = texture
      ? new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.5,
          metalness: 0.05,
        })
      : cardboard;

    // Order: +x, -x, +y, -y, +z (front), -z (back)
    return [
      cardboardSide, // right
      cardboardSide, // left
      cardboardTop, // top
      cardboard, // bottom
      frontMat, // front
      cardboard, // back
    ];
  }, [texture]);

  return (
    <group ref={groupRef} position={position}>
      <mesh
        ref={meshRef}
        position={[0, 0.85, 0]}
        castShadow
        material={materials}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <boxGeometry args={[BOX_WIDTH, BOX_HEIGHT, BOX_DEPTH]} />
      </mesh>

      {/* Edge lines for box definition */}
      <lineSegments position={[0, hovered ? 1.15 : 0.85, 0]}>
        <edgesGeometry
          args={[new THREE.BoxGeometry(BOX_WIDTH, BOX_HEIGHT, BOX_DEPTH)]}
        />
        <lineBasicMaterial
          color={hovered ? "#FF5722" : "#C8C2BA"}
          linewidth={1}
        />
      </lineSegments>

      {/* Title label on hover */}
      {hovered && (
        <Html
          position={[0, 2.0, 0]}
          center
          distanceFactor={8}
          style={{ pointerEvents: "none" }}
        >
          <div className="bg-bg-dark/90 backdrop-blur-sm px-3 py-1.5 whitespace-nowrap">
            <p className="text-[11px] font-mono text-white tracking-wider">
              {title}
            </p>
            <div className="flex gap-1 mt-0.5">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[8px] font-mono text-accent tracking-wider"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Html>
      )}

      {/* Accent stripe on box */}
      <mesh position={[0, 0.85, BOX_DEPTH / 2 + 0.001]}>
        <planeGeometry args={[BOX_WIDTH, 0.06]} />
        <meshBasicMaterial color="#FF5722" />
      </mesh>
    </group>
  );
}

export default function PackageBox(props: PackageBoxProps) {
  return <BoxContent {...props} />;
}
