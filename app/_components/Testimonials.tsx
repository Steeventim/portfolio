import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Quote, Star, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  linkedinUrl: string;
  date: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  badge: string;
}

const TESTIMONIALS: Testimonial[] = [
  // Commenté temporairement pour éviter les erreurs de build
  // Décommentez et personnalisez avec vos vrais témoignages
];

const CERTIFICATIONS: Certification[] = [
  // Commenté temporairement pour éviter les erreurs de build  
  // Décommentez et personnalisez avec vos vraies certifications
];

export const Testimonials = () => {
  return (
    <Section className="flex flex-col gap-8">
      {/* Testimonials Section */}
      <div>
        <Badge variant="outline" className="mb-4">
          Témoignages & Recommandations
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight">
          Ce que disent mes clients
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Des retours authentiques de clients et partenaires avec qui j&apos;ai
          eu le plaisir de collaborer.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="relative p-6 transition-shadow hover:shadow-lg"
          >
            <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/20" />

            {/* Rating */}
            <div className="mb-4 flex items-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="mb-6 text-sm leading-relaxed text-muted-foreground">
              &quot;{testimonial.content}&quot;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold">{testimonial.name}</h4>
                  <a
                    href={testimonial.linkedinUrl}
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-3 w-3" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role} chez {testimonial.company}
                </p>
                <p className="text-xs text-muted-foreground/60">
                  {testimonial.date}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 text-center">
        <h3 className="mb-2 font-semibold">
          Vous souhaitez travailler ensemble ?
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Rejoignez ces clients satisfaits et donnons vie à votre projet.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:contact@steeve-dev.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            Me contacter
          </a>
        </div>
      </Card>

      {/* Certifications Section */}
      <div className="mt-12">
        <Badge variant="outline" className="mb-4">
          Diplômes & Certifications
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight">
          Formations & Certifications
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Une formation continue pour rester à la pointe des technologies.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, index) => (
            <Card
              key={index}
              className="p-6 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mb-4">
                <Image
                  src={cert.badge}
                  alt={cert.title}
                  width={80}
                  height={80}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h4 className="mb-2 text-sm font-semibold">{cert.title}</h4>
              <p className="mb-1 text-xs text-muted-foreground">
                {cert.issuer}
              </p>
              <p className="mb-2 text-xs text-muted-foreground">{cert.date}</p>
              <Badge variant="secondary" className="text-xs">
                ID: {cert.credentialId}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
