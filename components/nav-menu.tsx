"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Code2, GraduationCap, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { DecryptText } from "./decrypt-text";
import { ThemeToggle } from "@/components/theme-toggle";

const menuItems = [
  { href: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
  { href: "/services", label: "Services", icon: <Code2 className="h-4 w-4" /> },
  {
    href: "/education",
    label: "Education",
    icon: <GraduationCap className="h-4 w-4" />,
  },
  { href: "/contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
];

export function NavMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-primary">{"<"}</span>
          <DecryptText text="MS" />
          <span className="text-primary">{"/>"}</span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 hover:bg-accent md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop menu */}
        <div className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="absolute left-0 right-0 top-full overflow-hidden bg-background/80 backdrop-blur-sm md:hidden"
        >
          <div className="space-y-1 p-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:text-primary ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
            {/* Add ThemeToggle to mobile menu */}
            <div className="px-4 py-2 md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      </nav>
      {/* Desktop ThemeToggle */}
      <div className="right-4 top-4 absolute z-50 hidden md:block">
          <ThemeToggle />
      </div>
    </header>
  );
}