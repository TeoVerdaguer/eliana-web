'use client';
import { useState } from 'react';
// Images
import WhatsApp from '../../../public/icons/WhatsApp';
// Libraries
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react';

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  const labelVariants = {
    closed: {
      opacity: 1,
      transition: { delay: 0.6, duration: 0.5 },
      position: 'static' as const
    },
    open: {
      opacity: 0,
      transition: { duration: 0.1 },
      position: 'absolute' as const
    },
  };

  return (
    <motion.div
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onTap={() => setOpen((o) => !o)}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className={`relative flex flex-col-reverse items-center justify-center backdrop-blur-md
                   rounded-full cursor-pointer select-none bg-[var(--accent)] h-14 w-50
                   shadow-[4px_4px_0px_1px_rgba(0,_0,_0,_0.7)]
                   ${open && "scale-150"}`}
      >
        {/* “Contact” label */}
        <motion.span
          variants={labelVariants}
          animate={open ? 'open' : 'closed'}
          className="font-[family-name:var(--font-jost)] font-medium text-lg pointer-events-none flex"
        >
            Contacto
            <ArrowUpRight size={30} />
        </motion.span>

        <AnimatePresence>
          {open && (
            <motion.ul
              key="links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="bottom-full mb-0 
                         flex items-center w-full justify-around"
            >
              {/* Whatsapp */}
              <motion.li
                  key={1}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0.05 * 1 }}
                  className="flex flex-col items-center"
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=+5493516889816&text=Hola+Eliana!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1"
                  >
                    <WhatsApp size={24} className='fill-black' />
                  </a>
                </motion.li>

                {/* Phone */}
                <motion.li
                  key={2}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0.05 * 1 }}
                  className="flex flex-col items-center"
                >
                  <a
                    href="tel:3516889816"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1"
                  >
                    <Phone color='black' size={22} />
                  </a>
                </motion.li>

                {/* Email */}
                <motion.li
                  key={3}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: 0.05 * 1 }}
                  className="flex flex-col items-center"
                >
                  <a
                    href="mailto:elibarrionew@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1"
                  >
                    <Mail color='black' size={22} />
                  </a>
                </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
