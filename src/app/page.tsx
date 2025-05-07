'use client';
import Image from "next/image";
import portrait from "../../public/images/portrait.png";
import { useEffect, useState } from "react";

export default function Home() {
  const rotatingTexts = ['Eliana! 👋', 'Diseñadora', 'Creativa'];
  const [currentText, setCurrentText] = useState(rotatingTexts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = rotatingTexts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % rotatingTexts.length;
        return rotatingTexts[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-jost)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="absolute ml-40 z-10 h-14 w-50 bg-white rounded-xl flex items-center px-4 font-[family-name:var(--font-jost)] text-md font-medium text-[var(--darker)] drop-shadow-lg">
          Hola, soy {currentText}
        </div>
        <div className="absolute z-10 ml-40 mt-10 w-0 h-0 border-t-[34px] border-r-[30px] border-b-0 border-l-0 border-solid border-t-white border-r-transparent border-b-transparent border-l-transparent" />

        <div className="h-[200px] w-[200px] rounded-full border-4 border-white overflow-hidden drop-shadow-lg">
          <Image
            src={portrait}
            height={200}
            width={200}
            alt="eliana portrait"
            className="rounded-full"
          />
        </div>
      </main>
    </div>
  )
}
