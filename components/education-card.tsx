"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DecryptText } from "./decrypt-text";
import { Calendar, Building2, Award } from "lucide-react";

interface Education {
  title: string;
  institution: string;
  year: string;
  description: string;
  image: string;
  skills: string[];
}

interface EducationCardProps {
  education: Education;
  delay: number;
}

export function EducationCard({ education, delay }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="group relative overflow-hidden rounded-lg border border-border bg-card"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={education.image}
          alt={education.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
      </div>

      <div className="relative space-y-4 p-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <DecryptText text={education.year} delay={delay} />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="h-4 w-4" />
            <DecryptText text={education.institution} delay={delay + 100} />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">
              <DecryptText text={education.title} delay={delay + 200} />
            </h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            <DecryptText text={education.description} delay={delay + 300} />
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {education.skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: (delay + 400 + index * 50) / 1000 }}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}