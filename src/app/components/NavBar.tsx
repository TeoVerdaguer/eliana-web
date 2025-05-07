'use client'
import Image from "next/image"
import menu from "../../../public/menu.svg"
import { useState } from "react"

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="w-full h-20 flex items-center justify-end md:justify-center bg-[var(--background)]">
      <ul className={`md:flex whitespace-nowrap gap-6 lg:gap-16 text-md lg:text-xl text-[var(--darker)] font-[family-name:var(--font-jost)] ${showMenu ? 'flex flex-col w-full px-10 py-4 text-right absolute top-20 bg-[var(--light)] z-20' : 'hidden'}`}>
        <a href="#"><li>Inicio</li></a>
        <a href="#"><li>Sobre Mi</li></a>
        <a href="#"><li>Curriculum</li></a>
        <a href="#"><li>Portfolio</li></a>
        <a href="#"><li>Contacto</li></a>
      </ul>
      <div className="flex mx-12 md:hidden cursor-pointer" onClick={() => {setShowMenu(!showMenu)}}>
        <Image src={menu} alt="hamburger icon" height={30} width={30} className="hover:drop-shadow-sm ease-in-out" />
      </div>
    </div>
  )
}

export default NavBar
