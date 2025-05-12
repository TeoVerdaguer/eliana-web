'use client'
import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface CardProps {
  title: string;
  category: string;
  description: string;
  link: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ title, category, description, link, img }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="bg-[var(--darker)] relative group"
      onClick={() => window.open(link, "_blank")}
    >
      <div
        className={`bg-[var(--dark)] h-90 w-70 rounded-3xl font-[family-name:var(--font-jost)] cursor-pointer
        before:absolute before:bottom-0 before:right-14 before:rounded-full before:h-[30px] before:w-[30px] before:bg-[#222224] before:shadow-[15px_15px_0_#151515] hover:before:hidden
        after:absolute after:bottom-14 after:right-0 after:rounded-full after:h-[30px] after:w-[30px] after:bg-[#222224] after:shadow-[15px_15px_0_#151515] hover:after:hidden
        group-hover:bg-center group-hover:bg-cover transition-all duration-400`}
        style={{
          backgroundImage: hovered ? `url(${img})` : "none",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="h-[80%] pt-6 pl-6 group-hover:hidden">
          <h1 className="text-white text-2xl uppercase">{title}</h1>
        </div>
        <div className="pl-6 group-hover:hidden">
          <h2 className="text-white">{category}</h2>
          <h3 className="text-[var(--grey)] text-sm">{description}</h3>
        </div>
      </div>
      <div className="bg-[var(--darker)] absolute bottom-0 right-0 h-14 w-14 rounded-tl-3xl group-hover:hidden"></div>
      <div className="absolute bottom-0 right-0 h-12 w-12 bg-[var(--accent)] rounded-full flex justify-center items-center group-hover:hidden">
        <ArrowUpRight size={30} />
      </div>
    </motion.div>
  );
};

export default Card;
