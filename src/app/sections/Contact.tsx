// Icons
import { Phone, Mail } from 'lucide-react'
import  Behance  from '../../../public/icons/Behance'
import Instagram from '../../../public/icons/Instagram'
import LinkedIn from '../../../public/icons/LinkedIn'
import WhatsApp from '../../../public/icons/WhatsApp'

const Contact = () => {
  return (
    <section id="contact" className="h-[50vh] flex flex-col justify-center items-center">
      <h1 className="text-center font-[family-name:var(--font-pt-serif)] text-4xl sm:text-5xl">
        Contacto
      </h1>
      <div className="mt-20 grid grid-cols-3 place-items-center gap-4 sm:flex sm:items-center sm:justify-center sm:gap-6 md:gap-20">
        <a href="https://www.behance.net/elianabarrionuevo" target="_blank" className="rounded-full bg-[var(--darker)] h-12 w-12 flex justify-center items-center group">
          <Behance />
        </a>
        <a href="https://www.instagram.com/cherry______studio/" target="_blank" className="rounded-full bg-[var(--darker)] h-12 w-12 flex justify-center items-center group">
          <Instagram />
        </a>
        <a href="https://www.linkedin.com/in/eliana-barrionuevo/" target='_blank' className="rounded-full bg-[var(--darker)] h-12 w-12 flex justify-center items-center group">
          <LinkedIn />
        </a>
        <a href="tel:3516889816" className="rounded-full bg-[var(--darker)] h-12 w-12 flex justify-center items-center group hover:text-[var(--primary)]">
          <Phone size={26} className="text-white group-hover:text-[var(--accent)]" />
        </a>
        <a href="mailto:elibarrionew@gmail.com" className="rounded-full bg-[var(--darker)] h-12 w-12 flex justify-center items-center group">
          <Mail size={26} className="text-white group-hover:text-[var(--accent)]" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+5493516889816&text=Hola+Eliana!" target='_blank' className="rounded-full bg-[var(--darker)] h-12 w-12 flex justify-center items-center group">
          <WhatsApp className="fill-white"/>
        </a>
      </div>
    </section>
  )
}

export default Contact
