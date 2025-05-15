import React from 'react'
import Photoshop from '../../../public/icons/Photoshop';
import Illustrator from '../../../public/icons/Illustrator';
import AfterEffects from '../../../public/icons/AfterEffects';
import Figma from '../../../public/icons/Figma';
import Capcut from '../../../public/icons/Capcut';

const About = () => {
  const data = [
    {
      id: 1,
      title: 'Técnicatura en Diseño Gráfico',
      description: 'Universidad Provincial de Córdoba (UPC)',
      yearFrom: '2020',
      yearTo: '2022'
    },
    {
      id: 2,
      title: 'Diseño UX/UI',
      description: 'Curso realizado en Coderhouse',
      yearFrom: '2022',
      yearTo: ''
    },

  ];

  return (
    <section id="about" className='min-h-[80vh] pt-20 px-10 md:px-30'>
      <h1 className='font-[family-name:var(--font-pt-serif)] text-5xl text-[var(--darker)]'>Estudios</h1>
      <table className='text-[var(--darker)] my-10 w-full'>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className={`font-[family-name:var(--font-jost)] ${(index + 1) === data.length ? "" : "border border-[var(--grey)] border-t-0 border-x-0"}`}>
              <td className='py-8'>
                <h2 className='font-[500]'>{item.title}</h2>
                <p className='max-w-[80%] md:max-w-[500px] text-[var(--grey)]'>{item.description}</p>
              </td>
              <td className='text-end'>
                <div className='flex flex-col md:flex-row md:justify-end'>
                  <div className='text-center'>
                    <h2 className='text-xl md:text-2xl'>{item.yearFrom}</h2>
                  </div>
                  {item.yearTo && (
                    <>
                      <h2 className='text-2xl px-2 text-center'> - </h2>
                      <div className='text-center'>
                        <h2 className='text-xl md:text-2xl'>{item.yearTo}</h2>
                      </div>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className='font-[family-name:var(--font-jost)] font-[500] text-xl pb-4 mt-20'>Herramientas que uso</h3>
      <hr className='text-[var(--grey)]'/>
      <div className='flex justify-around items-center mt-10 pb-20'>
          <Photoshop />
          <Illustrator />
          <AfterEffects />
          <Figma />
          <Capcut />
      </div>
    </section>
  )
}

export default About
