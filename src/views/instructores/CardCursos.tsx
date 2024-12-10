
import { cursosTipos} from "@/helpers/diferenciacionTipos"
import { useNavigate } from "react-router";

type CursosCardProps = {

    name:string
    instructor:string
    tipoCurso:string
    description:string
     grupoId:string
}
const CardCurso = ({name,instructor,tipoCurso,description,grupoId}:CursosCardProps) => {
   const navigation = useNavigate()
   const navegacion = ()=>{
    navigation(`/instructor/grupos/integrantes/${grupoId}`)
   }
    const imagen:string = cursosTipos[tipoCurso]  ;
  return (
   <article className="border-2 bg-white max-h-96  border-slate-400 w-full shadow-xl space-y-2">
    <img src={imagen} className="w-full" alt="Imagend el curso" />
    <div className="px-2">
      <h3 className="text-2xl font-semibold">{name}</h3>
      <h4 className="text-xl font-semibold">{instructor}</h4>
      <p>{description}</p>
    </div>

    <div className="flex justify-around px-10 gap-5">
      <button className="font-bold text-white bg-indigo-700 hover:bg-indigo-800 
                       transition-colors rounded-md  w-full mb-2  mx-auto md:w-1/2"
                       onClick={navegacion}>{/*agregamos el id del grupo para hacer una busqueda cuando la pagina cargue */}
        Ver particicpantes
      </button>
    <button className="font-bold text-white bg-rosa-rojiso hover:bg-rose-800 
                       transition-colors rounded-md  w-full mb-2  mx-auto md:w-1/2"> Entrar al curso</button>
    </div>
    
   </article>
  )
}

export default CardCurso    
