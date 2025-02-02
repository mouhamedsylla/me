"use client";

import { DecryptText } from "./decrypt-text";

interface Project {
  title: string;
  description: string;
  tech: string[];
  metrics: string;
}

interface ProjectCardProps {
  project: Project;
  delay: number;
}

export function ProjectCard({ project, delay }: ProjectCardProps) {
  return (
    <div className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">
          <DecryptText text={project.title} delay={delay} />
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          <DecryptText text={project.description} delay={delay + 100} />
        </p>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span
            key={tech}
            className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <DecryptText text={tech} delay={delay + 200 + index * 50} />
          </span>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        <DecryptText text={project.metrics} delay={delay + 300} />
      </p>
    </div>
  );
}