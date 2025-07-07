"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import {
  ChevronRight,
  User,
  FolderOpen,
  Award,
  MessageSquare,
  Mail,
  Home,
} from "lucide-react";
import { useState, useEffect } from "react";

const NAVIGATION_ITEMS = [
  {
    id: "hero",
    label: "Accueil",
    icon: Home,
    description: "Présentation et objectif professionnel",
  },
  {
    id: "about",
    label: "À propos",
    icon: User,
    description: "Biographie, parcours et valeurs",
  },
  {
    id: "projects",
    label: "Réalisations",
    icon: FolderOpen,
    description: "Projets détaillés et résultats",
  },
  {
    id: "skills",
    label: "Compétences",
    icon: Award,
    description: "Technologies et expertise",
  },
  {
    id: "testimonials",
    label: "Témoignages",
    icon: MessageSquare,
    description: "Recommandations et certifications",
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    description: "Coordonnées et formulaire",
  },
];

export const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset pour le header fixe
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Section className="flex flex-col gap-6">
      <div className="text-center">
        <Badge variant="outline" className="mb-4">
          Navigation
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight">
          Plan du portfolio
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Explorez les différentes sections pour découvrir mon parcours, mes
          compétences et mes réalisations.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {NAVIGATION_ITEMS.map((item, index) => (
          <Card
            key={item.id}
            className={`cursor-pointer p-4 transition-all hover:scale-105 hover:shadow-lg ${
              activeSection === item.id
                ? "bg-primary/5 ring-2 ring-primary"
                : "hover:bg-muted/50"
            }`}
            onClick={() => scrollToSection(item.id)}
          >
            <div className="flex items-center gap-3">
              <div
                className={`rounded-lg p-2 ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">{item.label}</h4>
                  <div className="flex items-center gap-1">
                    <Badge variant="secondary" className="text-xs">
                      {index + 1}
                    </Badge>
                    <ChevronRight className="h-3 w-3 text-muted-foreground" />
                  </div>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Indicateur de progression */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-sm font-semibold">Progression de lecture</h4>
          <span className="text-xs text-muted-foreground">
            Section{" "}
            {NAVIGATION_ITEMS.findIndex((item) => item.id === activeSection) +
              1}{" "}
            sur {NAVIGATION_ITEMS.length}
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-muted">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500"
            style={{
              width: `${((NAVIGATION_ITEMS.findIndex((item) => item.id === activeSection) + 1) / NAVIGATION_ITEMS.length) * 100}%`,
            }}
          />
        </div>
      </Card>

      {/* Actions rapides */}
      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => scrollToSection("about")}
        >
          <User className="mr-2 h-4 w-4" />
          Découvrir mon profil
        </Button>
        <Button size="sm" onClick={() => scrollToSection("contact")}>
          <Mail className="mr-2 h-4 w-4" />
          Me contacter
        </Button>
      </div>
    </Section>
  );
};
