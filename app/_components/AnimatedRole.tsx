"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedRoleProps {
  roles: Array<{
    title: string;
    color?: string;
    icon?: React.ReactNode;
  }>;
  className?: string;
}

export const AnimatedRole = ({ roles, className }: AnimatedRoleProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const fullText = currentRole.title;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, roles]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const currentRole = roles[currentIndex];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {currentRole.icon && (
        <span className="animate-bounce">{currentRole.icon}</span>
      )}
      <span 
        className={cn(
          "font-extrabold transition-colors duration-300",
          currentRole.color || "text-muted-foreground"
        )}
      >
        {displayText}
        <span 
          className={cn(
            "ml-1 inline-block w-0.5 h-6 bg-primary transition-opacity duration-150",
            showCursor ? "opacity-100" : "opacity-0"
          )}
        />
      </span>
    </div>
  );
};
