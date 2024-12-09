
import { cursosTipos} from "@/helpers/diferenciacionTipos"
import CrearEstrellas from "@/helpers/CrearEstrellas"

type CursosCardProps = {

    name:string
    instructor:string
    tipoCurso:string
    description:string
}
const CardCurso = ({name,instructor,tipoCurso,description}:CursosCardProps) => {
   
    const imagen:string = cursosTipos[tipoCurso]  ;
  return (
   <article className="border-2 bg-white max-h-96  border-slate-400 w-full shadow-xl space-y-2">
    <img src={imagen} className="w-full" alt="Imagend el curso" />
    <div className="px-2">
      <h3 className="text-2xl font-semibold">{name}</h3>
      <h4 className="text-xl font-semibold">{instructor}</h4>
      <p>{description}</p>
    </div>

    <div className="flex justify-center px-20">
    <button className="font-bold text-white bg-rosa-rojiso hover:bg-rose-800 
                       transition-colors rounded-md  w-full mb-2  mx-auto md:w-1/2"> Entrar al curso</button>
    </div>
    
   </article>
  )
}

export default CardCurso    
