
import { cursosTipos,tipoAida } from "@/helpers/diferenciacionTipos"
import CrearEstrellas from "@/helpers/CrearEstrellas"

type CursosCardProps = {

    name:string
    instructor:string
    tipoCurso:string
}
const CardCurso = ({name,instructor,tipoCurso}:CursosCardProps) => {
   
    const imagen:string = cursosTipos[tipoCurso]  ;
  return (
   <article className="border-2 bg-white border-slate-400 w-full shadow-xl space-y-2">
    <img src={imagen} className="w-full" alt="Imagend el curso" />
    <div className="px-2">
      <h3 className="text-2xl font-semibold">{name}</h3>
      <h4 className="text-xl font-semibold">{instructor}</h4>
  
    </div>
    <p className="text-slate-700">Total de la valoracion por estudiantes:</p>
    <CrearEstrellas puntuacion={5} />
    <div className="flex justify-center px-20">
    <button className="font-bold text-white bg-rosa-rojiso hover:bg-rose-800 
                       transition-colors rounded-md text-xl w-full mb-2"> Entrar al curso</button>
    </div>
    
   </article>
  )
}

export default CardCurso    
