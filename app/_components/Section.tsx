import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
// import { ClassNameValue } from "tailwind-merge";

export const Section = (props: PropsWithChildren<{ className?: String }>) => {
  return (
    <section className={cn("max-w-3xl px-4 m-auto", props.className)}>
      {props.children}
    </section>
  );
};
