"use client";

import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { floatInfinite } from "@/utils/gsapAnimation";

interface ShapeProps {
  src: StaticImageData;
  width?: number;
  height?: number;
  className?: string;
  duration?: number;
  yDistance?: number;
  xDistance?: number;
  alt?: string;
}

const MovingAnimatedShape = ({
  src,
  width = 80,
  height = 80,
  className = "",
  duration = 4,
  yDistance = 20,
  xDistance = 10,
  alt = "floating shape",
}: ShapeProps) => {
  const shapeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shapeRef.current) {
      floatInfinite(shapeRef.current, duration, yDistance, xDistance);
    }
  }, [duration, yDistance, xDistance]);

  return (
    <div ref={shapeRef} className={`absolute ${className}`}>
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  );
};

export default MovingAnimatedShape;
