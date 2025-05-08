'use client'
import Image from "next/image"
import menu from "../../../public/menu.svg"
import cross from "../../../public/cross.svg"
import { useState } from "react"

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={`w-full h-20 flex items-center justify-end md:justify-center bg-[var(--background)] ${showMenu ? "bg-[var(--darker)]" : ""}`}>
      <ul className={`md:flex whitespace-nowrap gap-6 lg:gap-16 text-md lg:text-xl text-[var(--darker)] font-[family-name:var(--font-jost)] 
        ${showMenu ? 'flex flex-col w-full pt-6 pb-12 text-center absolute top-20 bg-[var(--darker)] text-white z-20' : 'hidden'}`}>
        <a href="#" className={`${showMenu ? "hover:text-[var(--accent)]" : "hover:drop-shadow-sm" }`}><li>Inicio</li></a>
        <a href="#" className={`${showMenu ? "hover:text-[var(--accent)]" : "hover:drop-shadow-sm" }`}><li>Sobre Mi</li></a>
        <a href="#" className={`${showMenu ? "hover:text-[var(--accent)]" : "hover:drop-shadow-sm" }`}><li>Curriculum</li></a>
        <a href="#" className={`${showMenu ? "hover:text-[var(--accent)]" : "hover:drop-shadow-sm" }`}><li>Portfolio</li></a>
        <a href="#" className={`${showMenu ? "hover:text-[var(--accent)]" : "hover:drop-shadow-sm" }`}><li>Contacto</li></a>
      </ul>
      {showMenu ? (
        <div 
          className="flex justify-center items-center h-12 w-12 mx-12 md:hidden cursor-pointer bg-white rounded-full hover:bg-[var(--accent)] active:bg-[var(--accent)]" 
          onClick={() => {setShowMenu(false)}}
        >
          <Image src={cross} alt="cross icon" height={30} width={30} className="hover:drop-shadow-sm ease-in-out" />
        </div>
      ) : (
        <div className="flex mx-12 md:hidden cursor-pointer" onClick={() => {setShowMenu(true)}}>
          <Image src={menu} alt="hamburger icon" height={30} width={30} className="hover:drop-shadow-sm ease-in-out" />
        </div>
      )
      }
    </div>
  )
}

export default NavBar
