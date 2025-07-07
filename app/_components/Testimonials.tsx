import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Quote, Star, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  // {
  //   id: 1,
  //   name: "Sarah Johnson",
  //   role: "Product Manager",
  //   company: "TechCorp Inc.",
  //   avatar:
  //     "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  //   rating: 5,
  //   content:
  //     "Steeve delivered exceptional work on our web application. His attention to detail and ability to implement complex features with clean, maintainable code was impressive. The project was completed ahead of schedule.",
  //   linkedinUrl: "#",
  //   date: "Mars 2024",
  // },
  // {
  //   id: 2,
  //   name: "Michael Chen",
  //   role: "CTO",
  //   company: "StartupX",
  //   avatar:
  //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  //   rating: 5,
  //   content:
  //     "Working with Steeve was a game-changer for our team. His expertise in modern web technologies and AI integration helped us build a cutting-edge platform that exceeded our expectations.",
  //   linkedinUrl: "#",
  //   date: "Février 2024",
  // },
  // {
  //   id: 3,
  //   name: "Emma Rodriguez",
  //   role: "Design Lead",
  //   company: "Creative Studio",
  //   avatar:
  //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  //   rating: 5,
  //   content:
  //     "Steeve's ability to translate design concepts into pixel-perfect, responsive interfaces is remarkable. His collaborative approach and technical skills made our project a huge success.",
  //   linkedinUrl: "#",
  //   date: "Janvier 2024",
  // },
];

const CERTIFICATIONS = [
  // {
  //   title: "AWS Certified Solutions Architect",
  //   issuer: "Amazon Web Services",
  //   date: "2024",
  //   credentialId: "AWS-CSA-2024-001",
  //   badge: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  // },
  // {
  //   title: "Google Professional Cloud Developer",
  //   issuer: "Google Cloud",
  //   date: "2023",
  //   credentialId: "GCP-PCD-2023-002",
  //   badge: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=80&h=80&fit=crop&crop=center"
  // },
  // {
  //   title: "Meta Frontend Developer Professional",
  //   issuer: "Meta",
  //   date: "2023",
  //   credentialId: "META-FED-2023-003",
  //   badge: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center"
  // }
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
