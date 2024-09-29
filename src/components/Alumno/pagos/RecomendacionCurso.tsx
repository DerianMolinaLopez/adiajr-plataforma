import { useQuery } from "react-query"
import {getTypeCourses} from "@/api/userApi"
import CardCursoVenta from "../CardCursoVenta"

import { cursosTipos,tipoAida } from "@/helpers/diferenciacionTipos"
import { useState } from "react"
type RecomendacionCursoProps={
    tipoCurso:string
    excepcion:string
}
const RecomendacionCurso = ({tipoCurso,excepcion}:RecomendacionCursoProps) => {
    const [cursoImagen, setCursoImagen] = useState<string | null>(null);
    const [cursoAida, setCursoAida] = useState<string | null>(null);

    const {data:cursosRecomendados,isSuccess} = useQuery({
        queryFn:()=>getTypeCourses(tipoCurso),
        queryKey:['cursos-recomendados',tipoCurso],
        enabled:!!tipoCurso
        
    })
    if(isSuccess){
        cursosRecomendados?.filter(curso=>curso._id!==excepcion)
        
        
    }
  return (
    <section className="flex justify-center flex-col">
        <h3 className="font-semibold text-3xl">Algunos cursos que pueden gustarte</h3>
        <article className="flex flex-wrap gap-2">
            {cursosRecomendados?.map(curso=><CardCursoVenta key={curso._id} 
                                           curso={curso} 
                                           imagen={cursosTipos[curso.tipoCurso]} 
                                           tipoAidaImagen={tipoAida[curso.tipoCurso]} />)}

        </article>
    </section>
  )
}

export default RecomendacionCurso
