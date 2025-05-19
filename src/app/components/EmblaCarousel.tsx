import { useState } from 'react'
// Libraries
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
// Components
import Card from './Card'
import CardModal from './CardModal'

interface CardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  image: string;
}

type PropType = {
  slides: CardProps[],
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
    <div className="embla overflow-hidden w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-8 mt-10 mb-5 lg:mt-20 xl:mt-30">
          {slides.map((item) => (
            <Card key={item.id} {...item} onOpen={setOpenId} />
          ))}
        </div>
      </div>
    </div>

    <CardModal
      openId={openId}
      close={() => setOpenId(null)}
      image={
        slides.find((c) => c.id === openId)?.image ?? ''
      }
      title={slides.find((c) => c.id === openId)?.title ?? ''}
      category={slides.find((c) => c.id === openId)?.category ?? ''}
      description={slides.find((c) => c.id === openId)?.description ?? ''}
      link={slides.find((c) => c.id === openId)?.link ?? ''}
    />
    </>
  )
}

export default EmblaCarousel
