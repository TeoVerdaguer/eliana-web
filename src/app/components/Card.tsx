import React from 'react'
import Image from 'next/image'
import arrow from '../../../public/arrow.svg'

const Card = () => {
  const cards = [
    {
      title: 'Logofolio',
      category: 'SOCIAL MEDIA',
      description: 'Lorem ipsum dolor sit amet',
    },
  ];

  return (
    <div className="bg-[var(--darker)] relative">
      <div className="bg-[var(--dark)] h-90 w-70 rounded-3xl font-[family-name:var(--font-jost)] cursor-pointer group peer
      before:absolute before:bottom-0 before:right-14 before:rounded-full before:h-[30px] before:w-[30px] before:bg-[##222224] before:shadow-[10px_10px_0_#151515] hover:before:hidden
      after:absolute after:bottom-14 after:right-0 after:rounded-full after:h-[30px] after:w-[30px] after:bg-[##222224] after:shadow-[10px_10px_0_#151515] hover:after:hidden
      hover:bg-[url('/images/test.png')] hover:bg-center hover:bg-cover">
        <div className='h-[80%] pt-6 pl-6 group-hover:hidden'>
          <h1 className='text-white text-2xl'>{cards[0].title}</h1>
        </div>
        <div className='pl-6 group-hover:hidden'>
          <h2 className='text-white'>{cards[0].category}</h2>
          <h3 className='text-[#8f8f8f] text-sm'>{cards[0].description}</h3>
        </div>
      </div>
      <div className="bg-[var(--darker)] absolute bottom-0 right-0 h-14 w-14 rounded-tl-3xl peer-hover:hidden"></div>
      <div className='absolute bottom-0 right-0 h-12 w-12 bg-[var(--accent)] rounded-full flex justify-center items-center peer-hover:hidden'>
        <Image src={arrow} alt="arrow icon" height={25} width={25} />
      </div>
    </div>
  )
}

export default Card
