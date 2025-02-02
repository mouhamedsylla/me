"use client";

import { DecryptText } from "./decrypt-text";

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillSectionProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  delay: number;
}

export function SkillSection({ title, icon, skills, delay }: SkillSectionProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-primary">{icon}</span>
        <h3 className="text-xl font-semibold">
          <DecryptText text={title} delay={delay} />
        </h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div>
                <DecryptText text={skill.name} delay={delay + index * 100} />
                <p className="text-xs text-muted-foreground">{skill.description}</p>
              </div>
              <span className="text-primary">{skill.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                style={{
                  width: "0%",
                  animation: `growWidth 1s ease-out ${delay + index * 100}ms forwards`,
                  '--target-width': `${skill.level}%`,
                } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}