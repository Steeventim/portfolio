"use client";

import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export const TypewriterEffect = ({
  words,
  className = "",
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
}: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentText !== word) {
          // Typing
          setCurrentText(word.substring(0, currentText.length + 1));
        } else if (isDeleting && currentText !== "") {
          // Deleting
          setCurrentText(word.substring(0, currentText.length - 1));
        } else if (!isDeleting && currentText === word) {
          // Word completed, wait then start deleting
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && currentText === "") {
          // Deletion completed, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};
