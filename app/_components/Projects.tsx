import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FEATURED_PROJECTS = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management application with AI-powered prioritization and scheduling. Built with Next.js, TypeScript, and OpenAI API.",
    image: "/projects/task-manager.jpg",
    tags: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS"],
    links: {
      github: "https://github.com/Steeventim/ai-task-manager",
      live: "https://ai-task-manager.vercel.app"
    },
    featured: true
  },
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    links: {
      github: "https://github.com/Steeventim/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app"
    },
    featured: true
  },
  {
    title: "Weather Analytics Dashboard",
    description: "Interactive weather dashboard with data visualization and predictive analytics for multiple locations.",
    image: "/projects/weather-dashboard.jpg",
    tags: ["Vue.js", "Chart.js", "Weather API", "CSS3"],
    links: {
      github: "https://github.com/Steeventim/weather-dashboard",
      live: "https://weather-analytics.netlify.app"
    },
    featured: false
  }
];

const ProjectCard = ({ project }: { project: typeof FEATURED_PROJECTS[0] }) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
        <div className="relative flex h-full items-center justify-center bg-muted">
          <div className="text-center">
            <div className="text-4xl font-bold text-muted-foreground">
              {project.title.split(" ").map(word => word[0]).join("")}
            </div>
            <div className="text-sm text-muted-foreground">Project Preview</div>
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
              Featured
            </Badge>
          )}
        </div>
        
        <p className="mb-4 text-sm text-muted-foreground">
          {project.description}
        </p>
        
        <div className="mb-4 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-3 w-3" />
              Code
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-3 w-3" />
              Live Demo
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const Projects = () => {
  const featuredProjects = FEATURED_PROJECTS.filter(p => p.featured);
  const otherProjects = FEATURED_PROJECTS.filter(p => !p.featured);

  return (
    <Section className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <Badge variant="outline" className="mb-4">Featured Work</Badge>
          <h2 className="text-3xl font-semibold tracking-tight">
            Projects I&apos;m proud of
          </h2>
          <p className="mt-2 text-muted-foreground">
            A collection of projects that showcase my skills and passion for development.
          </p>
        </div>
      </div>
      
      {/* Featured Projects */}
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      
      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div>
          <h3 className="mb-4 text-xl font-semibold">Other Projects</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-8 text-center">
        <Button variant="outline" asChild>
          <Link href="https://github.com/Steeventim" target="_blank" rel="noopener noreferrer">
            View All Projects on GitHub
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};
