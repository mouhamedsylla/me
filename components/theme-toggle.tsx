"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-lg p-2 hover:bg-accent hover:text-accent-foreground"
    >
      <Sun 
        className="absolute h-5 w-5 rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0" 
        aria-hidden="true"
      />
      <Moon 
        className="h-5 w-5 rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100" 
        aria-hidden="true"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}