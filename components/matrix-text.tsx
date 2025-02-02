"use client";

import { useEffect, useRef } from "react";

interface MatrixTextProps {
  text: string;
  className?: string;
}

export function MatrixText({ text, className = "" }: MatrixTextProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.setAttribute("data-text", text);
  }, [text]);

  return (
    <span ref={elementRef} className={`matrix-text ${className}`}>
      {text}
    </span>
  );
}