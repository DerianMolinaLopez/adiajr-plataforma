import { useQuery } from "react-query"
import { getTypeCourses } from "@/api/userApi"
import { cursosTipos } from '@/helpers/diferenciacionTipos'
import CardCursoVenta from "./CardCursoVenta"
import { CursoDetail } from "@/types/index"
import { tipoAida } from "@/helpers/diferenciacionTipos"
type TiposCursosSeccionProps = {
    tipo: string
    titulo:string
}

const TiposCursosSeccion = ({ tipo,titulo }: TiposCursosSeccionProps) => {
    console.log(tipo)
    //@ts-ignore
    const cursoTipoImagen = cursosTipos[tipo] || null ;
      //@ts-ignore
    const tipoAidaImagen = tipoAida[tipo] || null;
    const { data: cursos, isLoading, error } = useQuery({
        queryFn: () => getTypeCourses(tipo),
        queryKey: ['cursos', tipo]
    })
    if(cursos) console.log(cursos)
        

    if(cursos)return (
        <>
        <h2 className="text-3xl mt-20 font-bold px-24">{titulo}</h2>
         <section className="grid grid-cols-4 w-full mt-10 gap-2 mx-20">
           
           {cursos.map((curso:CursoDetail)=>(<CardCursoVenta
                      curso={curso}
                      key={curso._id}
                      tipoAidaImagen={tipoAidaImagen}
                      imagen={cursoTipoImagen}
           />))}
        </section>
        </>
       
    )
}

export default TiposCursosSeccion