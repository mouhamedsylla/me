"use client";

import { Terminal, Github, Linkedin, Mail, Code2, Server, Cpu, Network, BookOpen, BrainCircuit, Target } from "lucide-react";
import { DecryptText } from "@/components/decrypt-text";
import { SkillSection } from "@/components/skill-section";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";
import { motion } from "framer-motion";

const skills = {
  backend: {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "Go", level: 80, description: "API design, concurrency, networking" },
      { name: "Rust", level: 70, description: "Systems programming, ray tracing" },
      { name: "GraphQL", level: 50, description: "API development, data queries" },
      { name: "WebSockets", level: 70, description: "Real-time communication" },
    ],
  },
  systems: {
    title: "Systems & Networks",
    icon: <Network className="h-6 w-6" />,
    skills: [
      { name: "Linux/Unix", level: 60, description: "System administration, shell scripting" },
      { name: "Networking", level: 65, description: "TCP/IP, protocols, security" },
      { name: "C Programming", level: 50, description: "Systems programming" },
      { name: "Server Management", level: 60, description: "Web servers, deployment" },
    ],
  },
  frontend: {
    title: "Frontend Development",
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      { name: "JavaScript", level: 90, description: "DOM, async, frameworks" },
      { name: "HTML/CSS", level: 85, description: "Responsive design, animations" },
      { name: "React", level: 80, description: "Component architecture, hooks" },
      { name: "DOM Manipulation", level: 85, description: "Custom framework development" },
    ],
  },
  other: {
    title: "Additional Skills",
    icon: <BrainCircuit className="h-6 w-6" />,
    skills: [
      { name: "Problem Solving", level: 95, description: "Algorithmic thinking, optimization" },
      { name: "Team Collaboration", level: 90, description: "Project management, communication" },
      { name: "Adaptability", level: 90, description: "Quick learning, flexibility" },
      { name: "Project Management", level: 85, description: "Planning, execution, delivery" },
    ],
  },
};

const projects = [
  {
    title: "Social Network",
    description: "Plateforme sociale complète avec authentification, messagerie temps réel, et gestion de groupes",
    tech: ["Go", "WebSocket", "SQLite", "JavaScript"],
    metrics: "Gestion de multiples connexions simultanées",
  },
  {
    title: "Ray Tracer (rt)",
    description: "Moteur de rendu 3D implémentant le ray tracing",
    tech: ["Rust", "3D Graphics", "Mathematics"],
    metrics: "Rendu photoréaliste avec gestion des ombres et réflexions",
  },
  {
    title: "Real-Time Forum",
    description: "Forum interactif avec communication en temps réel",
    tech: ["Go", "WebSocket", "SQLite", "JavaScript"],
    metrics: "Communication instantanée entre utilisateurs",
  },
  {
    title: "GraphQL API",
    description: "API flexible utilisant GraphQL pour la gestion des données",
    tech: ["Go", "GraphQL", "Database Design"],
    metrics: "Requêtes optimisées et flexibles",
  },
  {
    title: "Mini-Framework JS",
    description: "Framework JavaScript personnalisé pour la manipulation du DOM",
    tech: ["JavaScript", "DOM", "Event System"],
    metrics: "Architecture MVC complète",
  },
  {
    title: "Smart Road",
    description: "Système d'optimisation de trajets avec simulation",
    tech: ["Go", "Algorithms", "Path Finding"],
    metrics: "Calcul de chemins optimaux",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <div className="space-y-4">
            <h1 className="mb-4 flex items-center justify-center gap-3 text-5xl font-bold">
              <Terminal className="h-10 w-10 text-primary" />
              <DecryptText text="Mouhamadou Sylla" duration={800} />
            </h1>
            <p className="text-xl text-muted-foreground">
              <DecryptText 
                text="Développeur Full Stack" 
                delay={500}
                duration={1000}
              />
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/mouhamedsylla"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-3 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/sylla-mouhamed-b1ab93203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-3 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:syllamouhamed99@gmail.com"
                className="rounded-full bg-card p-3 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="mb-6 text-3xl font-semibold flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <DecryptText text="À Propos" delay={800} duration={500} />
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <DecryptText
                  text="Apprenant passionné à Zone01 Dakar, un centre de formation innovant axé sur l'intelligence collective et l'apprentissage par projet. Admis sur la base de tests cognitifs, démontrant un fort potentiel d'apprentissage et d'adaptation."
                  delay={1000}
                  duration={1500}
                />
              </p>
              <p>
                <DecryptText
                  text="Titulaire d'une licence en Systèmes, Réseaux et Télécoms (SRT), avec une solide formation en systèmes d'exploitation, architecture des ordinateurs, réseaux et sécurité."
                  delay={1200}
                  duration={1500}
                />
              </p>
              <p>
                <DecryptText
                  text="Actuellement en phase de finalisation de mon dernier projet obligatoire à Zone01, je me prépare à une alternance dans les domaines du cloud, DevOps, blockchain et sécurité."
                  delay={1400}
                  duration={1500}
                />
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <h3 className="text-2xl font-bold text-primary">2+</h3>
                <p className="text-sm text-muted-foreground">Années d'Expérience</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <h3 className="text-2xl font-bold text-primary">20+</h3>
                <p className="text-sm text-muted-foreground">Projets Réalisés</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <h3 className="text-2xl font-bold text-primary">4</h3>
                <p className="text-sm text-muted-foreground">Semaines de Piscine</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <h3 className="text-2xl font-bold text-primary">100%</h3>
                <p className="text-sm text-muted-foreground">Engagement</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Formation Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="mb-6 text-3xl font-semibold flex items-center gap-2">
            <Target className="h-8 w-8 text-primary" />
            <DecryptText text="Parcours Zone01" delay={1600} duration={500} />
          </h2>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                <DecryptText
                  text="La pédagogie de Zone01 est basée sur la résolution de projets concrets, le travail collaboratif et l'apprentissage par l'erreur. Cette approche unique m'a permis de développer non seulement mes compétences techniques mais aussi mon esprit d'équipe et ma créativité."
                  delay={1800}
                  duration={1500}
                />
              </p>
              <p>
                <DecryptText
                  text="La sélection à Zone01 commence par des tests cognitifs rigoureux, suivis d'une 'piscine' intensive de 4 semaines. Cette expérience immersive a renforcé ma détermination et mes capacités d'adaptation."
                  delay={2000}
                  duration={1500}
                />
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="mb-6 text-3xl font-semibold flex items-center gap-2">
            <Cpu className="h-8 w-8 text-primary" />
            <DecryptText text="Compétences" delay={2200} duration={500} />
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(skills).map(([key, section], index) => (
              <SkillSection
                key={key}
                title={section.title}
                icon={section.icon}
                skills={section.skills}
                delay={2400 + index * 200}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="mb-6 text-3xl font-semibold flex items-center gap-2">
            <Code2 className="h-8 w-8 text-primary" />
            <DecryptText text="Projets Réalisés" delay={3000} duration={500} />
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} delay={3200 + index * 200} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-semibold">
              <DecryptText text="Travaillons Ensemble" delay={4000} duration={500} />
            </h2>
            <p className="text-muted-foreground">
              <DecryptText
                text="Disponible pour des missions freelance en développement Full Stack (Go, Rust, Next.js, React) et applications système"
                delay={4200}
                duration={1000}
              />
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
          >
            Me Contacter
          </Link>
        </motion.footer>
      </div>
    </main>
  );
}