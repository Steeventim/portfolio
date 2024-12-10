import { Button, buttonVariants } from "@/components/ui/button";
import { Githubicon } from "./icons/Githubicon";
import { Section } from "./Section";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Linkedinicon } from "./icons/Linkedinicon";
import { Xicon } from "./icons/Xicon";
import { clsx } from "clsx";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-2xl font-bold text-primary">Tim's~steeve</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/Steeventim"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <Githubicon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/timnou-steeven-157a9528a/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <Linkedinicon size={16} className="text-foreground" />
          </Link>
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <Xicon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
