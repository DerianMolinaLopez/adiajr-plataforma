import { useParams } from "react-router-dom"
import { getCourseById } from "@/api/userApi"
import {useQuery} from "react-query"
import { getSectionsByCourse } from "@/api/userApi"
import { useEffect, useState } from "react"
import {cursosTipos} from "@/helpers/diferenciacionTipos"
export const CursoVistaDetalle = () => {
  const params = useParams()
  const { idCurso } = params
  const [imagen,setImagen] = useState<string>("")
  const {data:curso} = useQuery({
    queryFn:()=>getCourseById(idCurso as string),
    queryKey:"cursoDetalle",
    enabled:!!idCurso
  })
  const {data:secciones,} = useQuery({
    queryFn:()=>getSectionsByCourse(idCurso as string),
    queryKey:"secciones",
    enabled:!!idCurso
  })
  useEffect(()=>{
    if(curso){
      setImagen(cursosTipos[curso.tipoCurso])
    }
  },[curso])
  
 if(secciones && curso) return (
    <div className="pt-20">
      <h3 className="text-3xl font-bold">
        Detalle del curso
      </h3>
      <section className="mt-20  rounded grid grid-cols-2 gap-5">
        <article className="bg-white p-2 rounded-lg">
          <h3 className="text-3xl font-semibold">{curso?.name}</h3>
          <h4 className="text-xl">{curso?.description}</h4>
          <img src={imagen} alt="imagen del cruso" className="w-full p-10" />
        </article>
        <article className="space-y-5">
          {secciones.sections.map((seccion) => (
            <div key={seccion._id} className="border-2 border-slate-500 bg-white p-2 rounded-lg">
              <h4 className="text-3xl font-bold">{seccion.name}</h4>
              <p className="tetx-2xl">{seccion.description}</p>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
}
