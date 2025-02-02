"use client";

import { DecryptText } from "@/components/decrypt-text";
import { Code2, Server, Cpu} from "lucide-react";
// import { Code2, Server, Network, Shield, Cpu, Workflow } from "lucide-react";

const services = [
  {
    icon: <Server className="h-8 w-8" />,
    title: "Backend Development",
    description: "High-performance backend systems using Go and Rust. API development, microservices architecture, and database design.",
    features: [
      "Custom API Development",
      "Microservices Architecture",
      "Database Design & Optimization",
      "Performance Optimization",
    ],
  },
  // {
  //   icon: <Network className="h-8 w-8" />,
  //   title: "Network Solutions",
  //   description: "Network infrastructure design, implementation, and optimization. Security audits and performance tuning.",
  //   features: [
  //     "Network Architecture Design",
  //     "Security Implementation",
  //     "Performance Monitoring",
  //     "Troubleshooting & Optimization",
  //   ],
  // },
  // {
  //   icon: <Shield className="h-8 w-8" />,
  //   title: "Security Consulting",
  //   description: "Network security assessments, implementation of security measures, and best practices consulting.",
  //   features: [
  //     "Security Assessments",
  //     "Firewall Configuration",
  //     "VPN Setup",
  //     "Security Best Practices",
  //   ],
  // },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Full-Stack Development",
    description: "End-to-end web application development with modern technologies and best practices.",
    features: [
      "Web Application Development",
      "API Integration",
      "Frontend Development",
      "Real-time Features",
    ],
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Systems Programming",
    description: "Low-level system utilities and high-performance applications development.",
    features: [
      "Custom System Utilities",
      "Performance Optimization",
      "Concurrent Applications",
      "Systems Integration",
    ],
  },
  // {
  //   icon: <Workflow className="h-8 w-8" />,
  //   title: "DevOps Services",
  //   description: "Container orchestration, CI/CD pipeline setup, and infrastructure automation.",
  //   features: [
  //     "Docker Implementation",
  //     "CI/CD Setup",
  //     "Infrastructure as Code",
  //     "Monitoring Solutions",
  //   ],
  // },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <h1 className="mb-16 text-center text-4xl font-bold">
          <DecryptText text="Services" />
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary"
            >
              <div className="mb-4 text-primary">{service.icon}</div>
              <h2 className="mb-2 text-xl font-semibold">
                <DecryptText text={service.title} delay={index * 200} />
              </h2>
              <p className="mb-4 text-sm text-muted-foreground">
                <DecryptText text={service.description} delay={index * 200 + 100} />
              </p>
              <ul className="space-y-2 text-sm">
                {service.features.map((feature, featureIndex) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary"></span>
                    <DecryptText text={feature} delay={index * 200 + featureIndex * 100} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}