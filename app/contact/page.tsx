"use client";

import { DecryptText } from "@/components/decrypt-text";
import { Mail, Phone, MapPin, Clock, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  from: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Email invalide" }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" })
});

export default function Contact() {
  const [formData, setFormData] = useState({
    from: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      const response = await fetch("https://api.tuxdev.me/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: formData.from,
          email: formData.email,
          message: formData.message,
          subject: formData.subject
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        console.log(body);
        throw new Error(body);
      }

      toast.success("Message envoyé avec succès!");
      setFormData({
        from: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      const errors: Record<string, string> = {};
      if (err instanceof Error) {
        toast.error(err.message);
      } else if (typeof err === 'object' && err !== null && 'errors' in err) {
        (err as {errors: Array<{path: string[], message: string}>}).errors.forEach((error) => {
          errors[error.path[0]] = error.message;
        });
        setFieldErrors(errors);
      } else {
        toast.error('An unknown error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="from" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
                {fieldErrors.from && <p className="mt-1 text-sm text-red-500">{fieldErrors.from}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
                {fieldErrors.email && <p className="mt-1 text-sm text-red-500">{fieldErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-md border border-border bg-background px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                ></textarea>
                {fieldErrors.message && <p className="mt-1 text-sm text-red-500">{fieldErrors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}