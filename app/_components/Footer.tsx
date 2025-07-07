import { Section } from "./Section";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { Githubicon } from "./icons/Githubicon";
import { Linkedinicon } from "./icons/Linkedinicon";
import { Xicon } from "./icons/Xicon";
import { Heart, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Section className="py-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h3 className="font-bold">{siteConfig.creator}</h3>
            <p className="text-sm text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex items-center gap-4">
              <Link
                href={siteConfig.links.github}
                className="text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Githubicon size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                className="text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedinicon size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                className="text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Xicon size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:steeve.timnou@example.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>© {currentYear} Made with</span>
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              <span>by {siteConfig.creator}</span>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
};
