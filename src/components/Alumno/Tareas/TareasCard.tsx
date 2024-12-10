import { TareaTi } from "@/types/index"
import conversionFecha from "@/helpers/conversionFecha"
type TareasCardProps = {
    tarea:TareaTi
}

export const TareasCard = ({tarea}:TareasCardProps) => {
    console.log(tarea)
    return (
    <div className="bg-white rounded-xl px-2">
        <h3 className="text-2xl">
            <span className=" font-bold">Curso:</span> 
            {' '} <span className="text-indigo-700 font-semibold">{tarea.title}</span>
        </h3>
        <p className="text-2xl">{tarea.description}</p>
        <p className="text-2xl">Fecha limite de la tarea: <span className="text-red-700">{conversionFecha( tarea.endDate)}</span> </p>
    </div>
  )
}
