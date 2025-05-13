import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Card from './Card'

interface CardProps {
  id: number;
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

  return (
    <section className="embla overflow-hidden w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-8 mt-20 md:mt-30 xl:mt-40">
          {slides.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              link={item.link}
              img={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
