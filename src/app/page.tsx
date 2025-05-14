import Image from "next/image";
import portrait from "../../public/images/portrait.webp";
import Typewriter from "./components/Typewriter";
import { ArrowUpRight } from "lucide-react";

export default function Home() {

  return (
    <section id="home" className="flex items-center justify-center min-h-[100vh] font-[family-name:var(--font-jost)]">
      <main className="flex flex-col gap-[32px] items-center">

        <div className="absolute -mt-7 md:mt-0 md:ml-78 h-14 w-46 z-10 bg-white rounded-xl flex items-center px-4 text-[var(--darker)] drop-shadow-lg">
          <p className="font-[family-name:var(--font-jost)] text-md">Hola, soy&nbsp;</p>
          <Typewriter
            words={['Eliana!', 'Diseñadora', 'Creativa']}
            typingSpeed={100}
            deletingSpeed={50}
            delayBetweenWords={1500}
          />
        </div>
        <div className="absolute z-10 mr-30 md:mr-0 md:ml-39.5 mt-4 md:mt-9 w-0 h-0 border-t-[34px] border-r-[30px] border-b-0 border-l-0 border-solid border-t-white border-r-transparent border-b-transparent border-l-transparent" />

        <div className="h-[190px] w-[190px] rounded-full border-4 border-white  drop-shadow-lg">
          <Image
            src={portrait}
            height={200}
            width={200}
            alt="eliana portrait"
            className="rounded-full"
          />
        </div>
        <h1 className="font-[family-name:var(--font-pt-serif)] text-xl md:text-3xl lg:text-5xl xl:text-6xl text-center m-10 max-w-[70%]">
          Building digital products and effective solutions
        </h1>
        <a
          href="#contact"
          className="flex items-center justify-center bg-[var(--accent)] h-14 w-50 cursor-pointer hover:drop-shadow-sm rounded-full shadow-[4px_4px_0px_1px_rgba(0,_0,_0,_0.7)]"
        >
          <p className="mr-1 font-medium text-lg">Contacto</p>
          <ArrowUpRight size={30} />
        </a>
      </main>
    </section>
  )
}
