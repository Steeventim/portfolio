import { Section } from "./Section";
import Link from "next/link";
import { JSicon } from "./icons/JSicon";
import { Xicon } from "./icons/Xicon";
import { Code } from "./Code";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin, Coffee } from "lucide-react";
import { AdvancedTypewriter } from "./AdvancedTypewriter";

export const Hero = () => {
  return (
    <Section className="flex items-start gap-4 max-md:flex-col">
      <div className="flex flex-[3] flex-col gap-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="animate-pulse">
            <Coffee className="mr-1 h-3 w-3" />
            Available for work
          </Badge>
        </div>

        <div className="space-y-2">
          <h2 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-4xl font-bold text-transparent">
            Yvan Steeve Timnou Tchuinte
          </h2>

          <div className="text-2xl">
            <AdvancedTypewriter className="justify-start" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Cameroon</span>
          </div>
        </div>

        <p className="text-base leading-relaxed">
          Passionate about building innovative web solutions that make a real
          impact. With expertise in{" "}
          <Link href="#" className="transition-colors hover:text-primary">
            <Code className="inline-flex items-center gap-1">
              <JSicon size={15} className="inline" />
              JavaScript
            </Code>
          </Link>{" "}
          and modern frameworks, I create seamless user experiences and
          integrate{" "}
          <Link href="#" className="transition-colors hover:text-primary">
            <Code className="inline-flex items-center gap-1">
              <Xicon size={15} className="inline" />
              AI technologies
            </Code>
          </Link>{" "}
          to solve complex problems.
        </p>

        {/* Objectif de carrière selon l'étude */}
        <div className="rounded-lg border-l-4 border-primary bg-muted/50 p-4">
          <h4 className="mb-2 text-sm font-semibold text-primary">
            OBJECTIF PROFESSIONNEL
          </h4>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Contribuer à des projets innovants en tant que développeur
            full-stack, en apportant une expertise technique solide et une
            vision créative pour développer des applications web performantes
            qui transforment les idées en solutions digitales impactantes.
          </p>
        </div>
      </div>

      <div className="ml-auto flex-[2] max-md:m-auto">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl"></div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg"
            width={300}
            height={300}
            alt="Drapeau du Cameroun"
            className="relative z-10 h-auto w-full max-w-xs rounded-2xl border-2 border-primary/20 shadow-2xl transition-transform hover:scale-105 max-md:w-56 animate-float"
            priority
          />
        </div>
      </div>
    </Section>
  );
};
