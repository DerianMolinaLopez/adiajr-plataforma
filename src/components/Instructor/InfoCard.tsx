import  { ReactNode } from 'react'
type InfoCardProps = {
    Titulo:string
    Icono:ReactNode,
    numeracion:number
}
const InfoCard = ({Titulo,Icono,numeracion}:InfoCardProps) => {
  return (
    <button className='flex flex-row bg-white rounded-md py-10 px-5 items-center
                    w-1/3 hover:scale-105 transition-transform duration-125 ease-in-out
                     gap-5 shadow-lg'>
            <picture className='bg-gray-200 rounded-full p-1'>
               {Icono}
            </picture>
            <div>
            <p className='text-black text-2xl text-start'>{numeracion}</p>
            <p className='text-sx font-semibold text-slate-500'>{Titulo}</p>
            </div>
    
    </button>
  )
}

export default InfoCard
