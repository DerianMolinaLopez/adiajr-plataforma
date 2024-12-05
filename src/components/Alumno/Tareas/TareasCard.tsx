import { TareaTi } from "@/types/index"
import conversionFecha from "@/helpers/conversionFecha"
type TareasCardProps = {
    tarea:TareaTi
}

export const TareasCard = ({tarea}:TareasCardProps) => {
    console.log(tarea)
    return (
    <div className="bg-white rounded-xl px-2">
        <h3>
            Curso:
            {tarea.title}
        </h3>
        
        <h2>Descripcion:</h2>
        <p>{tarea.description}</p>
        <p>Fecha limite de la tarea <span className="text-red-700">{conversionFecha( tarea.endDate)}</span> </p>
    </div>
  )
}
