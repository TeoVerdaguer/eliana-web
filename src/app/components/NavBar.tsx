"use client";
import Image from "next/image";
import menu from "../../../public/menu.svg";
import cross from "../../../public/cross.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Inicio", "Sobre Mi", "Curriculum", "Portfolio", "Contacto"];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <nav className={`w-full h-20 flex items-center justify-start md:justify-center bg-[var(--background)] ${showMenu ? "bg-[var(--darker)]" : ""}`}>
      {/* Mobile menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={listVariants}
            className="flex flex-col justify-around h-[95vh] w-full pt-6 pb-12 pl-14 absolute top-19 left-0 bg-[var(--darker)] text-white z-20 text-4xl font-medium font-[family-name:var(--font-jost)]"
          >
            {navItems.map((text) => (
              <motion.li
                key={text}
                variants={itemVariants}
                whileHover={{ color: "var(--accent)" }}
                className="mb-4 cursor-pointer"
              >
                <a href="#">{text}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 lg:gap-16 text-md lg:text-xl text-[var(--darker)] font-[family-name:var(--font-jost)]">
        {navItems.map((text) => (
          <li key={text}>
            <a href="#" className="hover:text-[var(--accent)]">
              {text}
            </a>
          </li>
        ))}
      </ul>

      {/* Toggle buttons */}
      <div className="flex mx-12 md:hidden cursor-pointer">
        {showMenu ? (
          <div
            className="flex justify-center items-center h-12 w-12 bg-white rounded-full hover:bg-[var(--accent)] transition-colors"
            onClick={() => setShowMenu(false)}
          >
            <Image src={cross} alt="close menu" height={30} width={30} />
          </div>
        ) : (
          <div onClick={() => setShowMenu(true)}>
            <Image src={menu} alt="open menu" height={40} width={40} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
