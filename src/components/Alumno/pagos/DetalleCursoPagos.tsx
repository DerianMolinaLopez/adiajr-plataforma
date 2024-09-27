import { useState,useEffect } from "react";
import { CursoShortPay} from "@/types/index";
import { cursosTipos,tipoAida } from "@/helpers/diferenciacionTipos";
type DetalleCursoPagoProps = {
    curso :CursoShortPay
}
const DetalleCursoPagos = ({curso}:DetalleCursoPagoProps) => {
    const [cursoImagen, setCursoImagen] = useState<string | null>(null);
    const [cursoAida, setCursoAida] = useState<string | null>(null);
    useEffect(() => {
      if (curso) {
          //@ts-ignore
        setCursoImagen(cursosTipos[curso.tipoCurso] || null);
         
      }
    }, [curso]);
  return (
    <div>
      <div className="flex justify-around">
        <section className="w-1/2 bg-white shadow-xl rounded-lg p-3 flex flex-col space-y-5">
        <article className="flex justify-center">
              {cursoImagen && <img src={cursoImagen} className="w-10/12" alt="Imagen del tipo del curso" />}
        </article>
        <article className="px-20">
            <p className="text-3xl  font-black">{curso.name}</p>
            <p className="text-slate-600 font-bold text-2xl">{curso.instructorName}</p>
            <div>
            <p className="text-slate-600 font-bold text-2xl">Numero de secciones:xxxx</p>
            <p className="text-slate-600 font-bold text-2xl">Numero de horas de estudio estimadas:xxxx</p>
            </div>
            
        </article>
        
        </section>
        <section className="w-1/4 bg-white shadow-xl rounded-lg">
          <h3 className="text-center font-bold text-2xl">{curso.name}</h3>
        </section>
      </div>
    </div>
  )
}

export default DetalleCursoPagos
