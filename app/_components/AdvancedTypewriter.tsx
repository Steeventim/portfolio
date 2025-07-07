"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Code, Palette, Cpu, Zap, Globe, Rocket } from "lucide-react";

const ROLES = [
  {
    title: "Software Developer",
    icon: <Code className="h-5 w-5 text-blue-500" />,
    gradient: "from-blue-600 to-purple-600",
  },
  {
    title: "Frontend Specialist",
    icon: <Palette className="h-5 w-5 text-pink-500" />,
    gradient: "from-pink-600 to-rose-600",
  },
  {
    title: "React Developer",
    icon: <Zap className="h-5 w-5 text-cyan-500" />,
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    title: "Full Stack Engineer",
    icon: <Cpu className="h-5 w-5 text-green-500" />,
    gradient: "from-green-600 to-emerald-600",
  },
  {
    title: "AI Integration Expert",
    icon: <Rocket className="h-5 w-5 text-orange-500" />,
    gradient: "from-orange-600 to-red-600",
  },
  {
    title: "Web Designer",
    icon: <Globe className="h-5 w-5 text-purple-500" />,
    gradient: "from-purple-600 to-indigo-600",
  },
];

export const AdvancedTypewriter = ({ className }: { className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentRole = ROLES[currentIndex];
    const fullText = currentRole.title;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < fullText.length) {
            setDisplayText(fullText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(fullText.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % ROLES.length);
          }
        }
      },
      isDeleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const currentRole = ROLES[currentIndex];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative">
        <div className="animate-pulse rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-2">
          {currentRole.icon}
        </div>
      </div>

      <div className="flex items-center">
        <span
          className={cn(
            "bg-gradient-to-r bg-clip-text font-extrabold text-transparent transition-all duration-500",
            currentRole.gradient
          )}
        >
          {displayText}
        </span>
        <span
          className={cn(
            "ml-1 inline-block h-7 w-0.5 bg-gradient-to-b from-primary to-secondary transition-opacity duration-150",
            showCursor ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
    </div>
  );
};
