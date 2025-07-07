import { OpenLogo } from "./icons/OpenLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Database,
  Cloud,
  GitBranch,
  Shield,
  Zap,
  Brain,
  Globe,
  Server,
  Monitor,
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: Monitor,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20",
    skills: [
      { name: "React / Next.js", level: 95, experience: "3+ ans" },
      { name: "TypeScript", level: 90, experience: "2+ ans" },
      { name: "Vue.js / Nuxt.js", level: 85, experience: "2+ ans" },
      { name: "HTML5 / CSS3", level: 95, experience: "4+ ans" },
      { name: "TailwindCSS", level: 92, experience: "2+ ans" },
      { name: "SASS / SCSS", level: 88, experience: "3+ ans" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "bg-green-100 text-green-600 dark:bg-green-900/20",
    skills: [
      { name: "Node.js / Express", level: 88, experience: "2+ ans" },
      { name: "Python / Django", level: 80, experience: "2+ ans" },
      { name: "PHP / Laravel", level: 75, experience: "1+ an" },
      { name: "API REST / GraphQL", level: 90, experience: "3+ ans" },
      { name: "Microservices", level: 75, experience: "1+ an" },
    ],
  },
  {
    title: "Base de données",
    icon: Database,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20",
    skills: [
      { name: "MongoDB", level: 90, experience: "2+ ans" },
      { name: "PostgreSQL", level: 85, experience: "2+ ans" },
      { name: "MySQL", level: 80, experience: "3+ ans" },
      { name: "Redis", level: 70, experience: "1+ an" },
      { name: "Prisma ORM", level: 88, experience: "1+ an" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20",
    skills: [
      { name: "Docker", level: 85, experience: "2+ ans" },
      { name: "AWS", level: 80, experience: "1+ an" },
      { name: "Vercel / Netlify", level: 92, experience: "2+ ans" },
      { name: "GitHub Actions", level: 85, experience: "2+ ans" },
      { name: "Linux / Ubuntu", level: 88, experience: "3+ ans" },
    ],
  },
  {
    title: "Intelligence Artificielle",
    icon: Brain,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/20",
    skills: [
      { name: "OpenAI API", level: 90, experience: "1+ an" },
      { name: "LangChain", level: 80, experience: "1+ an" },
      { name: "Machine Learning", level: 70, experience: "1+ an" },
      { name: "Prompt Engineering", level: 85, experience: "1+ an" },
      { name: "Vector Databases", level: 75, experience: "6+ mois" },
    ],
  },
  {
    title: "Outils & Méthodologies",
    icon: GitBranch,
    color: "bg-gray-100 text-gray-600 dark:bg-gray-900/20",
    skills: [
      { name: "Git / GitHub", level: 95, experience: "4+ ans" },
      { name: "Agile / Scrum", level: 88, experience: "2+ ans" },
      { name: "Testing (Jest/Cypress)", level: 82, experience: "2+ ans" },
      { name: "Figma / Design", level: 80, experience: "3+ ans" },
      { name: "CI/CD", level: 85, experience: "2+ ans" },
    ],
  },
];

const FEATURED_TECHNOLOGIES = [
  {
    name: "React",
    logo: ReactLogo,
    description:
      "Framework principal pour créer des interfaces utilisateur modernes et performantes",
    animation: "animate-spin",
    duration: "10s",
  },
  {
    name: "OpenAI",
    logo: OpenLogo,
    description:
      "Expert en intégration d'IA pour créer des expériences utilisateur intelligentes",
    animation: "",
    duration: "",
  },
  {
    name: "TailwindCSS",
    logo: TailwindLogo,
    description:
      "Création d'interfaces élégantes et responsives en un temps record",
    animation: "",
    duration: "",
  },
];

export const Skills = () => {
  return (
    <Section className="flex flex-col gap-8">
      <div>
        <Badge variant="outline" className="mb-4">
          Compétences & Expertise
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight">
          Technologies que je maîtrise
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Une expertise technique complète, de la conception à la mise en
          production, avec une spécialisation dans les technologies modernes et
          l&apos;intelligence artificielle.
        </p>
      </div>

      {/* Technologies vedettes */}
      <div className="grid gap-6 md:grid-cols-3">
        {FEATURED_TECHNOLOGIES.map((tech) => (
          <Card
            key={tech.name}
            className="p-6 text-center transition-shadow hover:shadow-lg"
          >
            <div className="mb-4 flex justify-center">
              <tech.logo
                size={48}
                className={tech.animation}
                style={{
                  animationDuration: tech.duration,
                }}
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{tech.name}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {tech.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Catégories de compétences détaillées */}
      <div className="grid gap-6 lg:grid-cols-2">
        {SKILL_CATEGORIES.map((category) => (
          <Card key={category.title} className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className={`rounded-lg p-2 ${category.color}`}>
                <category.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{skill.experience}</span>
                      <span>{skill.level}%</span>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Certifications et apprentissage continu */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6">
        <div className="text-center">
          <h3 className="mb-4 text-xl font-semibold">Apprentissage continu</h3>
          <p className="mb-6 text-muted-foreground">
            Passion pour l&apos;innovation et la veille technologique constante
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center justify-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span className="text-sm">Nouvelles technologies</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm">Bonnes pratiques</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe className="h-5 w-5 text-blue-500" />
              <span className="text-sm">Communauté tech</span>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
};
