"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
      setDotPosition({ x: e.clientX - 2, y: e.clientY - 2 });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        className="cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="cursor-dot"
        style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }}
      />
    </>
  );
}