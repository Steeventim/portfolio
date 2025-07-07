import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "rounded-sm border border-accent bg-accent/30 px-1 py-0.5 font-extrabold text-primary transition-colors hover:bg-accent/50",
        className
      )}
      {...props}
    />
  );
};
