import React from 'react'

const Experience = () => {
  const data = [
    {
      id: 1,
      title: 'BANDO - Diseñadora Gráfica',
      description: 'Diseños para redes sociales, publicidad, branding/merch para la empresa y creación de contenido y edición',
      monthFrom: 'Junio',
      yearFrom: '2024',
      monthTo: 'Actualidad',
      yearTo: '2025'
    },
    {
      id: 2,
      title: 'NOMINUS - Diseñadora Gráfica',
      description: 'Diseños para redes sociales, publicidad, diseño de flyers impresos y diseño de identidad corporativa',
      monthFrom: 'Mayo',
      yearFrom: '2023',
      monthTo: 'Marzo',
      yearTo: '2024'
    },
    {
      id: 3,
      title: 'DREW - Diseñadora Gráfica freelance',
      description: 'Diseño para redes sociales, publicidad, diseño de materiales impresos y diseño de identidad corporativa',
      monthFrom: 'Febrero',
      yearFrom: '2023',
      monthTo: 'Mayo',
      yearTo: '2023'
    },
  ];

  return (
    <section id="experience" className='min-h-[80vh] py-20 px-10 md:px-30 bg-[var(--darker)]'>
      <h3 className='font-[family-name:var(--font-jost)] text-xl text-white pb-4'>Experiencia</h3>
      <h1 className='font-[family-name:var(--font-pt-serif)] text-5xl text-white'>Un resumen anual <br/>de mi experiencia</h1>

      <table className='text-white my-10 w-full'>
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
                    <p>{item.monthFrom}</p>
                    <h2 className='text-xl md:text-2xl'>{item.yearFrom}</h2>
                  </div>
                    <h2 className='text-2xl px-2 md:pt-5.5 text-center'> - </h2>
                  <div className='text-center'>
                    <p>{item.monthTo}</p>
                    <h2 className='text-xl md:text-2xl'>{item.yearTo}</h2>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Experience
