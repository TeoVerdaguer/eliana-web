"use client";
import Card from "./components/Card";

const Portfolio = () => {
  const cards = [
    {
      title: "QM Motors",
      category: "BRANDING",
      description: "Diseño de marca",
      link: "https://www.behance.net/gallery/224432491/Identidad-Visual-QM-motors",
      image: "/images/qm.png"
    },
    {
      title: "Bando",
      category: "DISEÑO DE PROPS",
      description: "Etiqueta champagne",
      link: "https://www.behance.net/gallery/207332349/Etiqueta-Champagne",
      image: "/images/bando.png"
    },
    {
      title: "Logofolio",
      category: "BRANDING",
      description: "Logos 2024",
      link: "https://www.behance.net/gallery/200439623/LOGOFOLIO",
      image: "/images/logofolio.png"
    },
    {
      title: "RPM Consultores",
      category: "BRANDING",
      description: "Manual de marca",
      link: "https://www.behance.net/gallery/189868051/Manual-de-marca-RPM",
      image: "/images/rpm.png"
    },
    {
      title: "Worldlink",
      category: "ILUSTRACIÓN",
      description: "Diseño de portadas",
      link: "https://www.behance.net/gallery/188069617/Diseno-de-tapas-de-libros",
      image: "/images/worldlink.png"
    },
    {
      title: "Isaias Goldman",
      category: "SOCIAL MEDIA",
      description: "Diseños para redes",
      link: "https://www.behance.net/gallery/179531793/Social-Media-ISAIAS-GOLDMAN",
      image: "/images/isaias.png"
    },
    {
      title: "Region Bar",
      category: "EDITORIAL",
      description: "Diseño de carta/menú",
      link: "https://www.behance.net/gallery/174923079/Diseno-de-Carta",
      image: "/images/region.png"
    },
    {
      title: "Complemento",
      category: "ILUSTRACIÓN",
      description: "Diseño de estampas",
      link: "https://www.behance.net/gallery/161256507/Diseno-de-Estampa-Complemento",
      image: "/images/complemento.png"
    },
    {
      title: "Balance",
      category: "DISEÑO UX/UI",
      description: "Diseño de app",
      link: "https://www.behance.net/gallery/149904997/BALANCE-DISENO-UXUI",
      image: "/images/balance.png"
    },
  ];

  return (
    <section
      id="works"
      className="flex flex-col gap-4 px-12 py-20 md:p-40 bg-[var(--darker)]"
    >
      <div className="text-white">
        <h1 className="font-[family-name:var(--font-pt-serif)] text-4xl md:text-5xl mb-3">
          Hola, soy <br /> Eliana Barrionuevo
        </h1>
        <p className="font-[family-name:var(--font-jost)] text-sm md:text-lg font-light max-w-50 md:max-w-150 text-[var(--grey)]">
          Soy la mejor diseñadora del mundo y nadie me superará jamás.
          Contratame y vas a comprobar lo que digo. Soy tremenda capa.
        </p>
        {/* <div className="flex flex-col gap-6 mt-60 font-[family-name:var(--font-jost)]">
          <div className="flex items-center">01<div className="h-[1px] w-30 mx-10 bg-black"></div>SOCIAL MEDIA</div>
          <div className="flex items-center">01<div className="h-[1px] w-30 mx-10 bg-black"></div>BRANDING</div>
          <div className="flex items-center">01<div className="h-[1px] w-30 mx-10 bg-black"></div>ILUSTRACIONES</div>
          <div className="flex items-center">01<div className="h-[1px] w-30 mx-10 bg-black"></div>DISEÑO UX/UI</div>
        </div> */}
      </div>
      <div>
        <div className="flex gap-8 mt-20 md:mt-30 xl:mt-40 overflow-scroll w-[120%] pr-30">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              category={card.category}
              description={card.description}
              link={card.link}
              img={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
