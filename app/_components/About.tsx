import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  Calendar,
  Award,
  Users,
  Coffee,
  Code2,
  Rocket,
  Target,
  Heart,
  Lightbulb,
  Zap,
  Globe,
  Shield,
} from "lucide-react";

const STATS = [
  {
    icon: Calendar,
    value: "3+",
    label: "Années d'expérience",
  },
  {
    icon: Code2,
    value: "50+",
    label: "Projets réalisés",
  },
  {
    icon: Users,
    value: "20+",
    label: "Clients satisfaits",
  },
  {
    icon: Coffee,
    value: "∞",
    label: "Tasses de café",
  },
];

const CORE_VALUES = [
  {
    icon: Target,
    title: "Excellence technique",
    description:
      "Code propre, performance optimale et bonnes pratiques de développement",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20",
  },
  {
    icon: Heart,
    title: "Passion créative",
    description:
      "Innovation constante et recherche de solutions élégantes aux défis complexes",
    color: "bg-red-100 text-red-600 dark:bg-red-900/20",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Communication claire et travail d'équipe pour des résultats exceptionnels",
    color: "bg-green-100 text-green-600 dark:bg-green-900/20",
  },
  {
    icon: Lightbulb,
    title: "Apprentissage continu",
    description: "Veille technologique et adaptation aux évolutions du secteur",
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20",
  },
];

const SOFT_SKILLS = [
  { name: "Résolution de problèmes", level: 95, icon: Zap },
  { name: "Communication", level: 90, icon: Globe },
  { name: "Adaptabilité", level: 92, icon: Rocket },
  { name: "Fiabilité", level: 98, icon: Shield },
];

const TIMELINE = [
  {
    year: "2024",
    title: "Développeur Frontend Senior",
    description:
      "Direction de projets d'intégration IA et mentorat d'équipes de développement",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "Développeur Full Stack",
    description:
      "Création d'applications web scalables avec des technologies modernes",
    icon: Code2,
  },
  {
    year: "2022",
    title: "Freelance indépendant",
    description:
      "Collaboration avec des clients internationaux sur des projets variés",
    icon: Users,
  },
  {
    year: "2021",
    title: "Diplômé en Informatique",
    description: "Spécialisation en génie logiciel, mention très bien",
    icon: Award,
  },
];

export const About = () => {
  return (
    <Section className="flex flex-col gap-8">
      {/* Introduction */}
      <div>
        <Badge variant="outline" className="mb-4">
          À propos de moi
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight">
          Passionné par la création de l&apos;avenir numérique
        </h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground">
          <p>
            Je suis <strong>Yvan Steeve Timnou Tchuinte</strong>, développeur
            logiciel camerounais avec une passion profonde pour la création
            d&apos;applications web innovantes qui résolvent des problèmes
            concrets. Mon parcours m&apos;a mené de l&apos;informatique
            théorique à la pratique du développement moderne.
          </p>
          <p>
            Spécialisé dans les frameworks JavaScript modernes, j&apos;excelle
            dans l&apos;intégration de technologies d&apos;intelligence
            artificielle pour améliorer l&apos;expérience utilisateur et
            optimiser les processus métier. Mon approche combine rigueur
            technique et créativité pour livrer des solutions qui dépassent les
            attentes.
          </p>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((stat) => (
          <Card
            key={stat.label}
            className="p-6 text-center transition-shadow hover:shadow-lg"
          >
            <stat.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Valeurs fondamentales */}
      <div>
        <h3 className="mb-6 text-xl font-semibold">
          Mes valeurs fondamentales
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {CORE_VALUES.map((value, index) => (
            <Card key={index} className="p-6 transition-shadow hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className={`rounded-lg p-3 ${value.color}`}>
                  <value.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 font-semibold">{value.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="mb-6 text-xl font-semibold">
          Compétences transversales
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {SOFT_SKILLS.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <skill.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parcours professionnel */}
      <div>
        <h3 className="mb-6 text-xl font-semibold">Mon parcours</h3>
        <div className="space-y-6">
          {TIMELINE.map((item, index) => (
            <div key={item.year} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                {index < TIMELINE.length - 1 && (
                  <div className="mt-2 h-16 w-px bg-border"></div>
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{item.title}</h4>
                  <Badge variant="secondary">{item.year}</Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ce qui me motive */}
      <Card className="p-6">
        <h3 className="mb-4 font-semibold">Ce qui me motive au quotidien</h3>
        <div className="space-y-3 text-muted-foreground">
          <p>
            🚀 <strong>Innovation continue :</strong> Explorer les dernières
            technologies et contribuer à des projets open-source pour rester à
            la pointe.
          </p>
          <p>
            🎯 <strong>Impact réel :</strong> Créer des solutions qui
            simplifient la vie des utilisateurs et génèrent de la valeur pour
            les entreprises.
          </p>
          <p>
            🌍 <strong>Partage de connaissances :</strong> Mentorer
            d&apos;autres développeurs et participer activement à la communauté
            tech africaine.
          </p>
          <p>
            💡 <strong>Défis techniques :</strong> Résoudre des problèmes
            complexes avec des approches créatives et des architectures
            élégantes.
          </p>
        </div>
      </Card>
    </Section>
  );
};
