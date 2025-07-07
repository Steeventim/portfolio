"use client";

import { useState, useEffect } from "react";

const DEVELOPER_ROLES = [
  "Software Developer",
  "Frontend Specialist", 
  "React Developer",
  "Full Stack Engineer",
  "AI Integration Expert",
  "Web Designer",
  "Tech Enthusiast",
  "Problem Solver"
];

export const SimpleTypewriter = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = DEVELOPER_ROLES[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Tape le texte
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.substring(0, currentText.length + 1));
        } else {
          // Attend avant de commencer à effacer
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Efface le texte
        if (currentText.length > 0) {
          setCurrentText(currentRole.substring(0, currentText.length - 1));
        } else {
          // Passe au role suivant
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % DEVELOPER_ROLES.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <span className="text-2xl font-extrabold text-muted-foreground">
      {currentText}
      <span className="animate-pulse text-primary ml-1">|</span>
    </span>
  );
};
