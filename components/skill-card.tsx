"use client";

import { useEffect, useRef } from "react";
import { DecryptText } from "./decrypt-text";

interface SkillCardProps {
  skill: string;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className="skill-card rounded-lg border border-border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary"
    >
      <DecryptText text={skill} delay={index * 200} />
    </div>
  );
}