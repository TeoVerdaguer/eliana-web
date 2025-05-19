'use client'
import Image from "next/image";
// Images
import portrait from "../../public/images/portrait.webp";
// Compenents
import Typewriter from "./components/Typewriter";
import ContactButton from "./components/ContactButton";
import AppStoreCard from "./components/Card";
import AppStoreCardModal from "./components/CardModal";
import { useState } from "react";

export default function Home() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="home" className="flex items-center justify-center min-h-[100vh] font-[family-name:var(--font-jost)]">
      <main className="flex flex-col gap-[32px] items-center">

        <div className="absolute -mt-7 md:mt-0 md:ml-78 h-14 w-46 z-10 bg-white rounded-xl flex items-center px-4 text-[var(--darker)] drop-shadow-lg">
          <Typewriter
            words={['Hola, soy Eliana', 'Soy creativa', 'Soy detallista', 'Soy diseñadora.']}
            typingSpeed={100}
            deletingSpeed={50}
            delayBetweenWords={1500}
          />
        </div>
        <div className="absolute z-10 mr-30 md:mr-0 ml-10 sm:ml-39.5 mt-4 md:mt-9 w-0 h-0 border-t-[34px] border-r-[30px] border-b-0 border-l-0 border-solid border-t-white border-r-transparent border-b-transparent border-l-transparent" />

        <div className="h-[190px] w-[190px] rounded-full border-4 border-white  drop-shadow-lg">
          <Image
            src={portrait}
            height={200}
            width={200}
            alt="eliana portrait"
            className="rounded-full"
          />
        </div>
        <h1 className="font-[family-name:var(--font-pt-serif)] text-2xl md:text-5xl lg:text-5xl xl:text-6xl text-center m-10 max-w-[70%]">
          Diseño visual que comunica, impacta y conecta
        </h1>
        <ContactButton />
      </main>
    </section>
  )
}
