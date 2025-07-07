import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import {
  BookCheck,
  Unplug,
  HandCoins,
  FolderSearch,
  ArrowUpRight,
  Waypoints,
  Coffee,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  Briefcase,
  TrendingUp,
  Users,
  Target
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Status = () => {
  return (
    <Section className="flex flex-col gap-8">
      <div>
        <Badge variant="outline" className="mb-4">
          Statut & Disponibilité
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight">
          Statut professionnel actuel
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Informations sur ma disponibilité, mes projets en cours et mes
          expériences récentes.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Statut de disponibilité */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
              <Coffee className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-xl font-semibold">
                  Disponible pour de nouveaux projets
                </h3>
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              </div>
              <p className="mb-4 text-muted-foreground">
                Je suis actuellement ouvert aux nouvelles opportunités et
                collaborations. Que ce soit pour un projet ponctuel, une mission
                de consulting ou un poste permanent, n&apos;hésitez pas à me
                contacter.
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Démarrage : Immédiat</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Réponse : Sous 24h</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Télétravail / Sur site</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Target className="h-4 w-4 text-primary" />
                  <span>Mission : 1-12 mois</span>
                </div>
              </div>

              <div className="mt-4">
                <Button asChild>
                  <Link href="#contact">
                    Discutons de votre projet
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Informations rapides */}
        <div className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-primary" />
              <div>
                <h4 className="text-sm font-semibold">Expérience</h4>
                <p className="text-xs text-muted-foreground">3+ années</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <h4 className="text-sm font-semibold">Projets livrés</h4>
                <p className="text-xs text-muted-foreground">100% à temps</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <div>
                <h4 className="text-sm font-semibold">Satisfaction</h4>
                <p className="text-xs text-muted-foreground">95% clients</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Projets annexes */}
        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <Waypoints className="h-5 w-5" />
            Projets annexes
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Projets personnels et contributions open-source qui démontrent ma
            passion pour l&apos;innovation.
          </p>
          <div className="space-y-3">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
                status={project.status}
              />
            ))}
          </div>
        </Card>

        {/* Expériences professionnelles */}
        <Card className="p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <Users className="h-5 w-5" />
            Expériences récentes
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Collaborations et missions qui ont façonné mon expertise.
          </p>
          <div className="space-y-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
                description={work.description}
              />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectsProps[] = [
  {
    Logo: HandCoins,
    title: "MyIrpp",
    description: "Calculateur d'impôts intelligent avec IA",
    url: "https://github.com/Steeventim/myirpp",
    status: "En production",
  },
  {
    Logo: Unplug,
    title: "Manutencia",
    description: "Gestionnaire de maintenance prédictive",
    url: "https://github.com/Steeventim/manutencia",
    status: "Beta",
  },
  {
    Logo: BookCheck,
    title: "GesActes",
    description: "Digitalisation de documents administratifs",
    url: "https://github.com/Steeventim/gesactes",
    status: "Développement",
  },
  {
    Logo: FolderSearch,
    title: "FSKElastic",
    description: "Moteur de recherche intelligent",
    url: "https://github.com/Steeventim/fskelastic",
    status: "Prototype",
  },
];

type SideProjectsProps = {
  Logo: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  url: string;
  status: string;
};

const SideProject = (props: SideProjectsProps) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
    >
      <div className="rounded-md bg-primary/10 p-2">
        <props.Logo className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <p className="truncate text-sm font-medium">{props.title}</p>
          <Badge variant="secondary" className="text-xs">
            {props.status}
          </Badge>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {props.description}
        </p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
    </Link>
  );
};

const WORKS: workProps[] = [
  {
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    title: "Afrogeek",
    role: "Développeur Stagiaire",
    date: "2019 - 2021",
    url: "https://www.afrogeek.cm",
    description:
      "Développement d'applications web et formation aux technologies modernes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=center",
    title: "Mincom",
    role: "Consultant IT",
    date: "2021 - 2023",
    url: "#",
    description:
      "Digitalisation des processus et modernisation des systèmes informatiques",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center",
    title: "CENADI",
    role: "Développeur Full-Stack",
    date: "2023 - Présent",
    url: "https://www.cenadi.cm",
    description:
      "Développement de solutions numériques pour l'administration publique",
  },
];

type workProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  description: string;
};

const Work = (props: workProps) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
    >
      <div className="relative h-10 w-10 flex-shrink-0">
        <Image
          src={props.image}
          alt={props.title}
          width={40}
          height={40}
          className="rounded-md object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-between">
          <h4 className="text-sm font-medium">{props.title}</h4>
          <ArrowUpRight className="h-3 w-3 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
        <p className="mb-1 text-xs text-primary">{props.role}</p>
        <p className="mb-2 text-xs text-muted-foreground">{props.date}</p>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {props.description}
        </p>
      </div>
    </Link>
  );
};
