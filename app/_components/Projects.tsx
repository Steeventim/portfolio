import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Calendar,
  Users,
  Award,
  TrendingUp,
  Target,
  Code2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FEATURED_PROJECTS = [
  {
    title: "AI-Powered Task Manager",
    description:
      "Application intelligente de gestion des tâches avec priorisation et planification automatisées par IA.",
    image: "/projects/task-manager.jpg",
    tags: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS", "Prisma"],
    links: {
      github: "https://github.com/Steeventim/ai-task-manager",
      live: "https://ai-task-manager.vercel.app",
    },
    context:
      "Projet personnel pour explorer l'intégration d'IA dans la productivité",
    objectives:
      "Automatiser la priorisation des tâches et améliorer l'efficacité personnelle",
    role: "Développeur Full-Stack & Designer UX",
    duration: "3 mois",
    teamSize: "Solo",
    results: [
      "Réduction de 40% du temps de planification",
      "Interface utilisateur intuitive avec 95% de satisfaction",
      "Architecture scalable supportant 1000+ utilisateurs",
    ],
    challenges:
      "Intégration complexe de l'API OpenAI et optimisation des performances",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Plateforme e-commerce moderne avec gestion d'inventaire en temps réel et tableau de bord administrateur.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Docker"],
    links: {
      github: "https://github.com/Steeventim/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
    },
    context:
      "Projet client pour une PME camerounaise souhaitant digitaliser ses ventes",
    objectives:
      "Créer une solution complète de vente en ligne avec gestion avancée",
    role: "Lead Developer",
    duration: "4 mois",
    teamSize: "3 développeurs",
    results: [
      "Augmentation de 200% des ventes en ligne",
      "Traitement de 500+ commandes par mois",
      "Réduction de 60% du temps de gestion des stocks",
    ],
    challenges:
      "Intégration de multiples systèmes de paiement et optimisation mobile",
    featured: true,
  },
  {
    title: "Weather Analytics Dashboard",
    description:
      "Tableau de bord météorologique interactif avec visualisation de données et analyses prédictives.",
    image: "/projects/weather-dashboard.jpg",
    tags: ["Vue.js", "Chart.js", "Weather API", "CSS3", "Python"],
    links: {
      github: "https://github.com/Steeventim/weather-dashboard",
      live: "https://weather-analytics.netlify.app",
    },
    context:
      "Projet académique pour démontrer les compétences en data visualization",
    objectives:
      "Créer un outil d'analyse météorologique pour les agriculteurs locaux",
    role: "Frontend Developer & Data Analyst",
    duration: "2 mois",
    teamSize: "2 développeurs",
    results: [
      "Interface responsive accessible sur tous les appareils",
      "Prédictions avec 85% de précision",
      "Adoption par 50+ agriculteurs de la région",
    ],
    challenges: "Traitement de grandes quantités de données en temps réel",
    featured: false,
  },
  {
    title: "Portfolio & Blog Platform",
    description:
      "Plateforme de création de portfolios et blogs pour créateurs de contenu.",
    image: "/projects/portfolio-platform.jpg",
    tags: ["Next.js", "Sanity CMS", "TypeScript", "Vercel"],
    links: {
      github: "https://github.com/Steeventim/portfolio-platform",
      live: "https://portfolio-creator.vercel.app",
    },
    context:
      "Projet open-source pour aider les développeurs à créer leurs portfolios",
    objectives: "Simplifier la création de portfolios professionnels",
    role: "Architecte & Développeur Principal",
    duration: "2 mois",
    teamSize: "Solo + contributeurs open-source",
    results: [
      "100+ portfolios créés",
      "Template réutilisé par la communauté",
      "20+ contributeurs GitHub",
    ],
    challenges: "Création d'un système modulaire et personnalisable",
    featured: false,
  },
];

const ProjectCard = ({
  project,
}: {
  project: (typeof FEATURED_PROJECTS)[0];
}) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
        <div className="relative flex h-full items-center justify-center bg-muted">
          <div className="text-center">
            <div className="text-4xl font-bold text-muted-foreground">
              {project.title
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>
            <div className="text-sm text-muted-foreground">
              Aperçu du projet
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
      </div>

      <div className="p-6">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-semibold leading-none tracking-tight">
            {project.title}
          </h3>
          {project.featured && (
            <Badge variant="secondary" className="ml-2">
              Vedette
            </Badge>
          )}
        </div>

        <p className="mb-3 text-sm text-muted-foreground">
          {project.description}
        </p>

        {/* Métadonnées du projet */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{project.teamSize}</span>
            </div>
            <div className="flex items-center gap-1">
              <Code2 className="h-3 w-3" />
              <span>{project.role}</span>
            </div>
          </div>
        </div>

        {/* Objectifs et résultats */}
        {project.featured && (
          <div className="mb-4 space-y-3">
            <div>
              <h5 className="mb-1 text-xs font-semibold text-primary">
                OBJECTIF
              </h5>
              <p className="text-xs text-muted-foreground">
                {project.objectives}
              </p>
            </div>
            <div>
              <h5 className="mb-1 text-xs font-semibold text-green-600">
                RÉSULTATS CLÉS
              </h5>
              <ul className="space-y-1">
                {project.results.slice(0, 2).map((result, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-1 text-xs text-muted-foreground"
                  >
                    <TrendingUp className="mt-1 h-2 w-2 flex-shrink-0 text-green-600" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="mb-4 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-1 h-3 w-3" />
              Code
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-1 h-3 w-3" />
              Demo
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const Projects = () => {
  const featuredProjects = FEATURED_PROJECTS.filter((p) => p.featured);
  const otherProjects = FEATURED_PROJECTS.filter((p) => !p.featured);

  return (
    <Section className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <Badge variant="outline" className="mb-4">
            Réalisations & Projets
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight">
            Projets qui font la différence
          </h2>
          <p className="mt-2 text-muted-foreground">
            Une sélection de projets qui démontrent mon expertise technique et
            ma capacité à résoudre des problèmes concrets.
          </p>
        </div>
      </div>

      {/* Projets vedettes avec détails complets */}
      <div className="space-y-8">
        <h3 className="text-xl font-semibold">Projets vedettes</h3>
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* Autres projets */}
      {otherProjects.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Autres réalisations</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Statistiques et métriques */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6">
        <h3 className="mb-4 text-lg font-semibold">Impact de mes projets</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 flex items-center justify-center">
              <Award className="mr-2 h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">95%</span>
            </div>
            <p className="text-sm text-muted-foreground">Satisfaction client</p>
          </div>
          <div className="text-center">
            <div className="mb-2 flex items-center justify-center">
              <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
              <span className="text-2xl font-bold">150%</span>
            </div>
            <p className="text-sm text-muted-foreground">ROI moyen</p>
          </div>
          <div className="text-center">
            <div className="mb-2 flex items-center justify-center">
              <Target className="mr-2 h-5 w-5 text-blue-600" />
              <span className="text-2xl font-bold">100%</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Projets livrés à temps
            </p>
          </div>
        </div>
      </Card>

      <div className="mt-8 text-center">
        <Button variant="outline" asChild>
          <Link
            href="https://github.com/Steeventim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir tous les projets sur GitHub
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};
