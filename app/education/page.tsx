"use client";

import { GraduationCap } from "lucide-react";
import { DecryptText } from "@/components/decrypt-text";
import { EducationCard } from "@/components/education-card";
import { motion } from "framer-motion";

const education = [
  {
    title: "Formation Zone01 Dakar",
    institution: "Zone01 Dakar",
    year: "2023 - Présent",
    description: "Formation intensive en développement logiciel basée sur l'apprentissage par projet et l'intelligence collective. Admission sur tests cognitifs et piscine de 4 semaines.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format&fit=crop",
    skills: ["Développement Full Stack", "Algorithmique", "Travail d'équipe", "Gestion de Projet"],
  },
  {
    title: "Licence en Systèmes, Réseaux et Télécoms",
    institution: "Université",
    year: "2020 - 2023",
    description: "Formation approfondie en systèmes d'exploitation, architecture des ordinateurs, réseaux informatiques et sécurité des systèmes.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=500&auto=format&fit=crop",
    skills: ["Réseaux TCP/IP", "Administration Linux", "Sécurité réseau", "Systèmes d'exploitation"],
  },
  {
    title: "Projets Majeurs Zone01",
    institution: "Zone01 Dakar",
    year: "2023 - 2024",
    description: "Réalisation de projets complexes en programmation système, développement web et algorithmique avancée.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=500&auto=format&fit=crop",
    skills: ["Go", "Rust", "JavaScript", "GraphQL", "WebSocket"],
  },
];

const projectCategories = [
  {
    title: "Système & Réseau",
    projects: [
      "Net-Cat: Clone de netcat en Go",
      "Go-Reloaded: Exercices avancés en Go",
      "Localhost: Serveur HTTP multi-connexions en Rust",
    ]
  },
  {
    title: "Web & Frameworks",
    projects: [
      "Real-Time-Forum: Forum avec WebSocket",
      "GraphQL: Intégration d'un API GraphQL",
      "Social-Network: Plateforme sociale complète",
    ]
  },
  {
    title: "Visualisation & Simulation",
    projects: [
      "Groupie-Tracker: Visualisation de données",
      "Lem-in: Algorithme de pathfinding",
      "Smart-Road: Optimisation de trajets",
    ]
  },
  {
    title: "Projets Avancés",
    projects: [
      "Ray Tracer: Moteur de rendu 3D en Rust",
      "Mini-Framework: Framework JS personnalisé",
      "Bomberman-DOM: Jeu en JavaScript",
    ]
  }
];

export default function Education() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 flex items-center gap-3"
        >
          <GraduationCap className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold">
            <DecryptText text="Formation & Projets" duration={800} />
          </h1>
        </motion.div>

        {/* Parcours académique */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => (
            <EducationCard
              key={item.title}
              education={item}
              delay={200 + index * 200}
            />
          ))}
        </div>

        {/* Projets par catégorie */}
        <section className="container space-y-6 py-8 md:py-12 lg:py-16">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl font-bold leading-[1.1] tracking-tight sm:text-3xl md:text-4xl">
              Projets par catégorie
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Découvrez mes projets classés par domaine d&apos;expertise
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projectCategories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-xl font-medium text-primary">
                  <DecryptText 
                    text={category.title} 
                    delay={600 + categoryIndex * 100}
                    duration={500}
                  />
                </h3>
                <ul className="space-y-2">
                  {category.projects.map((project, projectIndex) => (
                    <li 
                      key={project}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <DecryptText 
                        text={project}
                        delay={800 + categoryIndex * 100 + projectIndex * 100}
                        duration={500}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}