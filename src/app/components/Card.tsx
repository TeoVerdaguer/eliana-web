'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  onOpen: (id: string) => void;
  id: string;
  title: string;
  category: string;
  image: string;
}

const Card = ({
  id,
  title,
  category,
  image,
  onOpen,
}: CardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const maskImage = useMotionTemplate`
    radial-gradient(180px circle at ${mouseX}px ${mouseY}px,
      rgba(255,255,255,0.25), transparent)
  `;

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.article
      layoutId={id}
      onClick={() => onOpen(id)} 
      onMouseMove={handleMouseMove}
      className="relative h-90 w-70 rounded-3xl overflow-hidden shadow-xl font-[family-name:var(--font-jost)]
                 bg-neutral-900 text-white cursor-pointer group min-w-70"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {image?.length > 0 && (
        <Image src={image} alt={title} fill className="object-cover" />
      )}

      <motion.div
        style={{ WebkitMaskImage: maskImage, maskImage }}
        className="absolute inset-0 bg-neutral-900/70 pointer-events-none
                   group-hover:opacity-100 opacity-0 transition-opacity"
      />

      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <h3 className="text-xl font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">{title}</h3>
        <p className="text-sm text-white drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">{category}</p>
      </div>
    </motion.article>
  );
}

export default Card;
