'use client';

import { useEffect, useState } from 'react';

type TypewriterProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
};

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <h1 className="text-md font-[family-name:var(--font-jost)] whitespace-nowrap overflow-hidden border-r-1 border-black pr-1 ">
      {text}
    </h1>
  );
}
