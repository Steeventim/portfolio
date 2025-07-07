import { Section } from "./Section";
import Link from "next/link";
import { JSicon } from "./icons/JSicon";
import { Xicon } from "./icons/Xicon";
import { Code } from "./Code";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin, Coffee } from "lucide-react";

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
            Steeve Timnou
          </h2>
          <h3 className="text-2xl font-extrabold text-muted-foreground">
            Software Developer
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Cameroon</span>
          </div>
        </div>

        <p className="text-base leading-relaxed">
          I love creating innovative web applications with{" "}
          <Link href="#" className="transition-colors hover:text-primary">
            <Code className="inline-flex items-center gap-1">
              <JSicon size={15} className="inline" />
              JavaScript
            </Code>
          </Link>{" "}
          and modern technologies. Currently working on exciting projects with{" "}
          <Link href="#" className="transition-colors hover:text-primary">
            <Code className="inline-flex items-center gap-1">
              <Xicon size={15} className="inline" />
              AI Integration
            </Code>
          </Link>
          . Passionate about creating seamless user experiences and{" "}
          <Code className="inline-flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/255px-Flag_of_Cameroon.svg.png"
              width={15}
              height={10}
              alt="Cameroon flag"
              className="inline-block"
            />
            contributing to the tech community
          </Code>
          .
        </p>
      </div>
      
      <div className="ml-auto flex-[2] max-md:m-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
          <Image
            src="https://imgs.search.brave.com/Et-roXncdoIl8RN9bBPQG7nP7OS7pf3dnr5c-uvtAkQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/NTExODExNi9mci9w/aG90by9kcmFwZWF1/LWR1LWNhbWVyb3Vu/LndlYnA_YT0xJmI9/MSZzPTYxMng2MTIm/dz0wJms9MjAmYz0w/S20tekJSMmt3cXc4/ZGl3eVZfcnlqZ0lx/RkFXX1lLOERQbkg5/bUd2T0xNPQ"
            width={300}
            height={300}
            alt="Steeve's picture"
            className="relative z-10 h-auto w-full max-w-xs rounded-2xl border-2 border-primary/20 shadow-2xl transition-transform hover:scale-105 max-md:w-56"
            priority
          />
        </div>
      </div>
    </Section>
  );
};
