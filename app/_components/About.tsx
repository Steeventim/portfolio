import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Calendar, Award, Users, Coffee, Code2, Rocket } from "lucide-react";

const STATS = [
  {
    icon: Calendar,
    value: "3+",
    label: "Years Experience",
  },
  {
    icon: Code2,
    value: "50+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "20+",
    label: "Happy Clients",
  },
  {
    icon: Coffee,
    value: "∞",
    label: "Cups of Coffee",
  },
];

const TIMELINE = [
  {
    year: "2024",
    title: "Senior Frontend Developer",
    description: "Leading AI integration projects and mentoring junior developers",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    description: "Building scalable web applications with modern technologies",
    icon: Code2,
  },
  {
    year: "2022",
    title: "Started Freelancing",
    description: "Began working with international clients on diverse projects",
    icon: Users,
  },
  {
    year: "2021",
    title: "Computer Science Graduate",
    description: "Graduated with honors, specializing in software engineering",
    icon: Award,
  },
];

export const About = () => {
  return (
    <Section className="flex flex-col gap-8">
      <div>
        <Badge variant="outline" className="mb-4">About Me</Badge>
        <h2 className="text-3xl font-semibold tracking-tight">
          Passionate about building the future
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          I&apos;m a software developer from Cameroon with a passion for creating 
          innovative web applications that solve real-world problems. I specialize 
          in modern JavaScript frameworks and love integrating AI to enhance user experiences.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.label} className="p-6 text-center">
            <stat.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Experience Timeline */}
      <div>
        <h3 className="mb-6 text-xl font-semibold">My Journey</h3>
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

      {/* Personal Touch */}
      <Card className="p-6">
        <h3 className="mb-4 font-semibold">When I&apos;m not coding</h3>
        <p className="text-muted-foreground">
          You&apos;ll find me exploring new technologies, contributing to open-source projects, 
          or sharing knowledge with the developer community. I believe in continuous learning 
          and enjoy staying up-to-date with the latest trends in web development and AI.
        </p>
      </Card>
    </Section>
  );
};
