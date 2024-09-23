import { formatearPrecios } from "@/helpers/formatearPrecios"
import { CursoDetail } from "@/types/index"

type CardCursoVentaProps = {
    curso: CursoDetail
    imagen:string
    tipoAidaImagen:string
}

const CardCursoVenta = ({curso,imagen,tipoAidaImagen}:CardCursoVentaProps) => {
    //@ts-ignore

  return (
    <article className="bg-white border border-slate-400 shadow-xl
                          flex flex-col rounded-md">
      <picture className="flex justify-center items-center p-1 rounded-sm ">
        <img src={imagen} alt="imagen del curso " className="w-full" />
      </picture>
      {/*detalle */}
      <div className="flex flex-col px-3 space-y-2">
         <div className="flex justify-between items-center ">
        <p className="text-center text-2xl font-semibold">
            {curso.name}
        </p>
        <img src={tipoAidaImagen} className="w-11" alt="Imagen de aida" />
      </div>
         <p className="text-xl text-slate-500 font-bold">
                {curso.instructor_Id.user_Id.name}
         </p>
         <div className="flex justify-around">
         <p className="font-bold text-lg">{formatearPrecios(120)}MXN</p>
         {/* agregar evento de onclick */}
        <button className="bg-rosa-rojiso hover:bg-rosa-rojiso-hover
                         text-white rounded-md p-2 font-bold transition-colors duration-150">
            Comprar curso
        </button>
         </div>
        
      </div>
     
    </article>
  )
}

export default CardCursoVenta
