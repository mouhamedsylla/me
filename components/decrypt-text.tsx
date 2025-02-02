"use client";

import { useEffect, useState, useRef } from "react";

const characters = "!@#$%^&*()_+-=[]{}|;:,.<>?";

interface DecryptTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number; // Durée totale de l'animation en ms
}

export function DecryptText({ 
  text, 
  className = "", 
  delay = 0,
  duration = 1000 // Durée par défaut de 1s
}: DecryptTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Calculer l'intervalle basé sur la durée totale et la longueur du texte
    const interval = Math.max(20, Math.min(50, duration / text.length));
    
    timeout = setTimeout(() => {
      setIsDecrypting(true);
      let iteration = 0;
      
      const decrypt = setInterval(() => {
        setDisplayText(prev => 
          prev
            .split("")
            .map((_, idx) => {
              if (idx < iteration) {
                return text[idx];
              }
              
              // Réduire le nombre de caractères aléatoires pour les textes plus longs
              if (idx >= iteration && idx <= iteration + 2) {
                return characters[Math.floor(Math.random() * characters.length)];
              }
              
              return text[idx];
            })
            .join("")
        );
        
        iteration += 1;
        
        if (iteration > text.length) {
          clearInterval(decrypt);
          setDisplayText(text);
          setIsDecrypting(false);
        }
      }, interval);

      return () => clearInterval(decrypt);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, duration]);

  return (
    <span 
      ref={containerRef}
      className={`inline-block ${className}`}
      style={{ 
        minWidth: containerRef.current?.offsetWidth,
        minHeight: containerRef.current?.offsetHeight
      }}
    >
      {displayText}
    </span>
  );
}