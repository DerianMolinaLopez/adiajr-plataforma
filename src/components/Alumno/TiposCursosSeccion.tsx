import { useQuery } from "react-query"
import { getTypeCourses } from "@/api/userApi"
import { cursosTipos } from '@/helpers/diferenciacionTipos'
import CardCursoVenta from "./CardCursoVenta"
import { CursoDetail } from "@/types/index"
import { tipoAida } from "@/helpers/diferenciacionTipos"
type TiposCursosSeccionProps = {
    tipo: string
    titulo:string,

}

const TiposCursosSeccion = ({ tipo,titulo }: TiposCursosSeccionProps) => {
  //  console.log(tipo)
    //@ts-ignore
    const cursoTipoImagen = cursosTipos[tipo] ;
      //@ts-ignore
    const tipoAidaImagen = tipoAida[tipo] ;
    const { data: cursos, isLoading, error } = useQuery({
        queryFn: () => getTypeCourses(tipo),
        queryKey: ['cursos', tipo]
    })
    if(cursos) console.log(cursos)
    
        

    if(cursos)return (
        <div className="sm:px-20">
        <h2 className="text-3xl mt-10 font-bold px-2 lg:mx-auto ">{titulo}</h2>
         <section className="grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full mt-10 gap-2 mx-20">
           
           {cursos.map((curso:CursoDetail)=>(
                     <CardCursoVenta
                      valoracion={curso.valoration}
                      curso={curso}
                      key={curso._id}
                      tipoAidaImagen={tipoAidaImagen}
                      imagen={cursoTipoImagen}
           />))}
        </section>
        </div>
       
    )
}

export default TiposCursosSeccion