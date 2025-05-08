import React from 'react'
import Card from './components/Card'

const About = () => {
  return (
    <section id="about" className="flex flex-col gap-4 px-12 py-20 md:p-40 bg-[var(--darker)]">
      <div className="text-white">
        <h1 className="font-[family-name:var(--font-pt-serif)] text-4xl md:text-5xl mb-3">Hola, soy <br/> Eliana Barrionuevo</h1>
        <p className="font-[family-name:var(--font-jost)] text-sm md:text-lg font-light max-w-50 md:max-w-150 text-[#8f8f8f]">Soy la mejor diseñadora del mundo y nadie me superará jamás. Contratame y vas a comprobar lo que digo. Soy tremenda capa.</p>
        {/* <div className="flex flex-col gap-6 mt-60 font-[family-name:var(--font-jost)]">
          <div className="flex items-center">01<div className="h-[1px] w-30 mx-10 bg-black"></div>SOCIAL MEDIA</div>
          <div className="flex items-center">01<div className="h-[1px] w-30 mx-10 bg-black"></div>BRANDING</div>
          <div className="flex items-center">01<div className="h-[1px] w-30 mx-10 bg-black"></div>ILUSTRACIONES</div>
          <div className="flex items-center">01<div className="h-[1px] w-30 mx-10 bg-black"></div>DISEÑO UX/UI</div>
        </div> */}
      </div>
      <div>
        <div className="flex gap-8 mt-20 md:mt-30 xl:mt-40">
          <Card />
        </div>
      </div>
    </section>
  )
}

export default About
