"use client";
import Image from "next/image";
import menu from "../../../public/menu.svg";
import cross from "../../../public/cross.svg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {id: 1, text: 'Inicio', link: '#home'},
  {id: 2, text: "Portfolio", link: '#works'},
  {id: 3, text: "Sobre Mi", link: '#about'},
  {id: 4, text: "Experiencia", link: '#experience'},
  {id: 5, text: "Contacto", link: '#contact'},
];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setShowNav(false)
      } else {
        // scrolling up
        setShowNav(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : '-100%' }}
      transition={{ duration: 0.3 }} 
      className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center justify-start md:justify-center ${showMenu ? "bg-[var(--darker)]" : "bg-[var(--light)]"}`}
    >
      {/* Mobile menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={listVariants}
            className="flex flex-col justify-around h-[40vh] w-full pt-6 pb-12 pl-14 absolute top-19 left-0 bg-[var(--darker)] text-white z-20 text-4xl font-medium font-[family-name:var(--font-jost)]"
          >
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                variants={itemVariants}
                whileHover={{ color: "var(--accent)" }}
                className="mb-4 cursor-pointer"
              >
                <a href={item.link} onClick={() => setShowMenu(false)}>{item.text}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Desktop menu */}
      <motion.ul
        className="hidden md:flex gap-6 lg:gap-16 text-md lg:text-xl text-[var(--darker)] font-[family-name:var(--font-jost)]"
        initial="initial"
      >
        {navItems.map((item) => (
          <li key={item.id} className="relative h-[1.2em] overflow-hidden">
            <motion.a href={item.link} className="block h-full">
              <motion.div
                whileHover={{ y: '-50%' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex flex-col"
              >
                <span>{item.text}</span>
                <span>{item.text}</span>
              </motion.div>
            </motion.a>
          </li>
        ))}
      </motion.ul>

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
    </motion.nav>
  );
};

export default NavBar;
