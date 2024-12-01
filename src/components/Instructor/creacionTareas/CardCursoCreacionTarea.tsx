import { cursosTipos } from "@/helpers/diferenciacionTipos"
import { useState } from "react";
import ModalCrearTareaSeccion from "@/views/instructores/ModalCrearTareaSeccion";
type CardCursoCreacionTareaProps = {
    name: string
    description:string
    tipoCurso:string
    courseId:string
}
export const CardCursoCreacionTarea = ({name,description,tipoCurso,courseId}:CardCursoCreacionTareaProps) => {
    const imagen:string = cursosTipos[tipoCurso]  ;
    const [isOpen, setIsOpen] = useState(false);
    console.log(imagen)
  return (
    <>
    <article className="border-2 bg-white border-slate-400 w-full shadow-xl space-y-2 rounded ">
              <img src={imagen} className="w-full" alt="Imagend el curso" />
              <div className="px-2">
              <h3 className="text-2xl font-semibold">{name}</h3>
              <h4 className="text-xl font-semibold">{description}</h4>
    </div>
    <div className="p-2">
            <ModalCrearTareaSeccion courseId={courseId} tittle={name} description={description} isOpen={isOpen} setIsOpen={setIsOpen} ></ModalCrearTareaSeccion>
    </div>

   </article>
   {/*renderizacion de un modal */}
    </>

  )
}
