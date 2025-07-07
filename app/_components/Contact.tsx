"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@steeve-dev.com",
    href: "mailto:contact@steeve-dev.com",
    primary: true,
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+237 6XX XXX XXX",
    href: "tel:+2376XXXXXXX",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Douala, Cameroun",
    href: "#",
  },
];

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/steeve-dev",
    color: "text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/steeve-dev",
    color: "text-gray-900 dark:text-gray-100",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/steeve_dev",
    color: "text-blue-400",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (à remplacer par votre API)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        budget: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section className="flex flex-col gap-8">
      <div className="text-center">
        <Badge variant="outline" className="mb-4">
          Contact
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight">
          Donnons vie à votre projet
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Une idée en tête ? Un projet à concrétiser ? N&apos;hésitez pas à me
          contacter. Je serais ravi de discuter de votre vision et de voir
          comment nous pouvons la réaliser ensemble.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Informations de contact
            </h3>
            <div className="space-y-4">
              {CONTACT_INFO.map((info) => (
                <Card key={info.label} className="p-4">
                  <a
                    href={info.href}
                    className="flex items-center gap-3 transition-colors hover:text-primary"
                  >
                    <div
                      className={`rounded-lg p-2 ${info.primary ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                    >
                      <info.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{info.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Réseaux sociaux</h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-lg p-3 transition-all hover:scale-110 hover:shadow-lg ${social.color} bg-muted`}
                  title={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-green-100 p-2 dark:bg-green-900/20">
                <Clock className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Disponibilité</p>
                <p className="text-sm text-muted-foreground">
                  Ouvert aux nouvelles opportunités
                </p>
              </div>
            </div>
          </Card>

          {/* Response Time */}
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/20">
                <Send className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Temps de réponse</p>
                <p className="text-sm text-muted-foreground">
                  Sous 24h en moyenne
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="p-6">
          <h3 className="mb-6 text-xl font-semibold">Envoyez-moi un message</h3>

          {isSubmitted ? (
            <div className="py-8 text-center">
              <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-600" />
              <h4 className="mb-2 text-lg font-semibold text-green-600">
                Message envoyé !
              </h4>
              <p className="text-sm text-muted-foreground">
                Merci pour votre message. Je vous répondrai dans les plus brefs
                délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium"
                  >
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium"
                  >
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <option value="">Sélectionner un budget</option>
                    <option value="1000-5000">1 000 - 5 000 €</option>
                    <option value="5000-10000">5 000 - 10 000 €</option>
                    <option value="10000-25000">10 000 - 25 000 €</option>
                    <option value="25000+">25 000 € et plus</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  placeholder="De quoi souhaitez-vous parler ?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  placeholder="Décrivez votre projet ou votre besoin..."
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </Section>
  );
};
