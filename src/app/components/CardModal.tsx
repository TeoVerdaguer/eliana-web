import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Link } from "lucide-react";

interface ModalProps {
  openId: string | null;
  close: () => void;
  image: string;
  title: string;
  description: string;
  category: string;
  link: string;
}

const CardModal = ({
  openId,
  close,
  image,
  title,
  description,
  category,
  link,
}: ModalProps) => {
  return (
    <AnimatePresence>
      {openId && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* Enlarged card */}
          <motion.article
            key="modal"
            layoutId={openId}
            className="fixed inset-0 m-auto h-[80vh] w-[90vw] max-w-xl
                       rounded-3xl overflow-hidden shadow-2xl z-50
                       bg-[var(--darker)] text-white flex flex-col
                       font-[family-name:var(--font-jost)]"
          >
            <Image
              src={image}
              alt={title}
              height={500}
              width={800}
              className="h-1/2 w-full object-cover"
              priority={true}
            />

            <div className="flex-1 p-8 space-y-4 overflow-y-auto">
              <h2 className="text-2xl font-semibold font-[family-name:var(--font-pt-serif)]">{title}</h2>
              <div className='bg-[var(--dark)] rounded-full w-fit py-1 px-4'>
                <p className="text-neutral-300 text-sm">{category}</p>
              </div>

              {/* Dummy lorem text or real app description */}
              <p className="text-sm leading-relaxed">
                {description}
              </p>

              <div className='flex gap-2'>
                <button
                  onClick={close}
                  // className="mt-4 px-4 py-2 rounded-lg bg-white text-neutral-900
                  //           font-medium text-lg hover:bg-neutral-200 transition"
                  className="rounded-full cursor-pointer bg-[var(--accent)] px-4 py-1 mt-4 hover:scale-102
                   shadow-[4px_4px_0px_1px_rgba(0,_0,_0,_0.7)] text-[var(--darker)] font-[500] text-lg"
                >
                  Cerrar
                </button>
                <a
                  href={link}
                  target='_blank'
                  className="rounded-full cursor-pointer bg-[var(--accent)] px-4 py-1 mt-4 font-[500] text-[var(--darker)]
                  shadow-[4px_4px_0px_1px_rgba(0,_0,_0,_0.7)] flex items-center justify-center gap-1 hover:scale-102 text-lg"
                  // className="mt-4 px-4 py-2 rounded-lg bg-white text-neutral-900
                  //       font-medium text-lg hover:bg-neutral-200 transition flex items-center gap-1"
                  >
                  Ver más
                  <Link size={18} />
                  </a>
                </div>
            </div>
          </motion.article>
        </>
      )}
    </AnimatePresence>
  );
}

export default CardModal;
