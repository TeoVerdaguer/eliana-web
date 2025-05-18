"use client";
// Libraries
import { EmblaOptionsType } from 'embla-carousel'
// Components
import EmblaCarousel from "@/app/components/EmblaCarousel"

const Portfolio = () => {
  const SLIDES = [
    {
      id: 1,
      title: "QM Motors",
      category: "BRANDING",
      description: "Diseño de marca",
      link: "https://www.behance.net/gallery/224432491/Identidad-Visual-QM-motors",
      image: "/images/qm.webp"
    },
    {
      id: 2,
      title: "Bando",
      category: "DISEÑO DE PROPS",
      description: "Etiqueta champagne",
      link: "https://www.behance.net/gallery/207332349/Etiqueta-Champagne",
      image: "/images/bando.webp"
    },
    {
      id: 3,
      title: "Logofolio",
      category: "BRANDING",
      description: "Logos 2024",
      link: "https://www.behance.net/gallery/200439623/LOGOFOLIO",
      image: "/images/logofolio.webp"
    },
    {
      id: 4,
      title: "RPM Consultores",
      category: "BRANDING",
      description: "Manual de marca",
      link: "https://www.behance.net/gallery/189868051/Manual-de-marca-RPM",
      image: "/images/rpm.webp"
    },
    {
      id: 5,
      title: "Worldlink",
      category: "ILUSTRACIÓN",
      description: "Diseño de portadas",
      link: "https://www.behance.net/gallery/188069617/Diseno-de-tapas-de-libros",
      image: "/images/worldlink.webp"
    },
    {
      id: 6,
      title: "Isaias Goldman",
      category: "SOCIAL MEDIA",
      description: "Diseños para redes",
      link: "https://www.behance.net/gallery/179531793/Social-Media-ISAIAS-GOLDMAN",
      image: "/images/isaias.webp"
    },
    {
      id: 7,
      title: "Region Bar",
      category: "EDITORIAL",
      description: "Diseño de carta/menú",
      link: "https://www.behance.net/gallery/174923079/Diseno-de-Carta",
      image: "/images/region.webp"
    },
    {
      id: 8,
      title: "Complemento",
      category: "ILUSTRACIÓN",
      description: "Diseño de estampas",
      link: "https://www.behance.net/gallery/161256507/Diseno-de-Estampa-Complemento",
      image: "/images/complemento.webp"
    },
    {
      id: 9,
      title: "Balance",
      category: "DISEÑO UX/UI",
      description: "Diseño de app",
      link: "https://www.behance.net/gallery/149904997/BALANCE-DISENO-UXUI",
      image: "/images/balance.webp"
    },
  ];
  const OPTIONS: EmblaOptionsType = { align: 'start', dragFree: true }

  return (
    <section
      id="works"
      className="flex flex-col gap-4 py-20 pl-12 md:pl-50 bg-[var(--darker)]"
    >
      <div className="text-white">
        <h1 className="font-[family-name:var(--font-pt-serif)] text-4xl sm:text-5xl mb-3">
          Eliana Barrionuevo
        </h1>
        <p className="font-[family-name:var(--font-jost)] text-md md:text-lg font-light max-w-60 sm:max-w-90 md:max-w-140 text-[var(--grey)]">
          Diseñadora gráfica recibida en 2022 con 3 años de experiencia.<br /> Me especializo en crear piezas visuales que comunican de forma clara, atractiva y estratégica.
        </p>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default Portfolio;
