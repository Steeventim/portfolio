import { cn } from "@/lib/utils";

export type SpacingProp = {
  size?: "sm" | "md" | "lg";
};

export const Spacing = ({ size = "md" }: SpacingProp) => {
  return (
    <div
      className={cn({
        "h-8 lg:h-16": size === "sm",
        "h-12 lg:h-24": size === "md",
        "h-16 lg:h-32": size === "lg",
      })}
    />
  );
};
