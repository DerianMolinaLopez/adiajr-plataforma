import { ReactNode } from "react"
import InfoCard from "./InfoCard"
import { UserGroupIcon, RectangleGroupIcon,AcademicCapIcon } from '@heroicons/react/24/solid'

type InfoCard = {
    Titulo:string
    Icono:ReactNode
    numeracion:number
}
const infoCards:InfoCard[] = [
    {
        Titulo:"Estudiantes",
        Icono: <UserGroupIcon className="w-10 text-emerald-600"/>,
        numeracion:1331
    },
    {
        Titulo:"Total de Grupos",
        Icono: <RectangleGroupIcon className="w-10 text-indigo-600"/>,
        numeracion:0.60

    },
    {
        Titulo:"Aulas generadas",
        Icono: <AcademicCapIcon className="w-10 text-violet-600"/>,
        numeracion:.30
    }
]
const CardContainer = () => {
  return (
    <>
     <h3 className="text-3xl ml-20 mt-5 font-bold">Inicio</h3>
    <div className="flex flex-row mx-20 mt-5 justify-center gap-10">
      {infoCards.map((card,index)=><InfoCard Titulo={card.Titulo}
                                    numeracion={card.numeracion}
                                    Icono={card.Icono} key={index}
                                    
       />)}
    </div>
    </>
    
  )
}

export default CardContainer
