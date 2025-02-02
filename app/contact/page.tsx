"use client";

import { DecryptText } from "@/components/decrypt-text";
import { Mail, Phone, MapPin, Clock, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h1 className="mb-8 text-4xl font-bold">
              <DecryptText text="Contact Me" />
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              <DecryptText
                text="Let's discuss how I can help with your next project. Feel free to reach out through any of the following channels."
                delay={200}
              />
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="font-semibold">Email</h2>
                  <a
                    href="mailto:contact@example.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    syllamouhamed99@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="font-semibold">Phone</h2>
                  <a
                    href="tel:+221781457943"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +221 78 145 79 43
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="font-semibold">Location</h2>
                  <p className="text-muted-foreground">Dakar, Sénégal</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="font-semibold">Availability</h2>
                  <p className="text-muted-foreground">Monday - Friday, 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/mouhamedsylla"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sylla-mouhamed-b1ab93203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card p-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="mb-6 text-2xl font-semibold">
              <DecryptText text="Send a Message" delay={400} />
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}