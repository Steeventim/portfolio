import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  BookCheck,
  Unplug,
  HandCoins,
  FolderSearch,
  ArrowUpRight,
  ALargeSmall,
  PiggyBank,
  Waypoints,
} from "lucide-react";
import Link from "next/link"; // Assurez-vous que Link est importé depuis next/link
import Image from "next/image";
import { title } from "process";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 w-full">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="w-full flex-[2] flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex-col gap-1">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            name="@steeventimnou"
            image="https://images.unsplash.com/photo-1733036016861-0541eb76dac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
            mediumImage="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
            description="16'000"
          />
          <ContactCard
            name="steeve timnou"
            image="https://images.unsplash.com/photo-1733036016861-0541eb76dac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
            mediumImage="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
            description="14'000"
          />
        </Card>
      </div>
    </Section>
  );
};

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-10 h-10 rounded-full object-contain"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
        />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight
        className="group-hover:translate-x-2 mr-4 group-hover:translate-y-2 transition-transform"
        size={16}
      />
    </Card>
  );
};

const SIDE_PROJECTS: SideProjectsProps[] = [
  {
    Logo: HandCoins,
    title: "MyIrpp",
    description: "A simple icon library",
    url: "/",
  },
  {
    Logo: Unplug,
    title: "Manutencia",
    description: "A simple icon library",
    url: "/",
  },
  {
    Logo: BookCheck,
    title: "GesActes",
    description: "A simple icon library",
    url: "/",
  },
  {
    Logo: FolderSearch,
    title: "FSKElastic",
    description: "A simple icon library",
    url: "/",
  },
  {
    Logo: Waypoints,
    title: "ReminderTwilio",
    description: "A simple icon library",
    url: "/",
  },
  {
    Logo: PiggyBank,
    title: "SwitchBank",
    description: "A simple icon library",
    url: "/",
  },
];

type SideProjectsProps = {
  Logo: React.ComponentType; // Utilisez React.ComponentType pour le type d'icône
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectsProps) => {
  const titleP = props.title || "Titre par défaut";
  const descriptionP = props.description || "Description par défaut";
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{titleP}</p>
        <p className="text-sm text-muted-foreground">{descriptionP}</p>
      </div>
    </Link>
  );
};

const WORKS: workProps[] = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeyqHyrEKm-3RM6TZPy21zp2nylhgPhZTMw&s",
    title: "Afrogeek",
    role: "Stagiaire",
    date: "2019 - 2021",
    url: "https://www.afrogeek.cm",
  },
  {
    image:
      "https://imgs.search.brave.com/SAMoEEbsZ6ydOSIP8huKZiCpmDThqYc2zzh0Ba3OPrg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I1L0NvYXRfb2Zf/YXJtc19vZl9DYW1l/cm9vbi5zdmc",
    title: "Mincom",
    role: "Stagiaire",
    date: "2021 - 2023",
    url: "",
  },
  {
    image:
      "https://i0.wp.com/www.cenadi.cm/wp-content/uploads/2023/08/ngomna-app-2.jpeg?fit=500%2C500&ssl=1",
    title: "CENADI",
    role: "Stagiaire",
    date: "2023 - Present",
    url: "/",
  },
];

type workProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

const Work = (props: workProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2"></div>
        <p className="text-lg font-semibold">{props.title}</p>

        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
