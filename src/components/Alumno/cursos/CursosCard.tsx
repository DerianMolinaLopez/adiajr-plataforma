import { Curso } from "@/types/index"
import { cursosTipos,tipoAida } from "@/helpers/diferenciacionTipos"
import CrearEstrellas from "@/helpers/CrearEstrellas"
type CursosCardProps = {
    curso:Curso
}
const CursosCard = ({curso}:CursosCardProps) => {
    //@ts-ignore
    const imagen = cursosTipos[curso.tipoCurso] || null ;
    //@ts-ignore
    const tipoAidaImagen = tipoAida[curso.tipoCurso] || null ;
  return (
   <article className="border-2 border-slate-400 w-full shadow-xl space-y-2">
    <img src={imagen} className="w-full" alt="Imagend el curso" />
    <div>
      <h3 className="text-2xl font-semibold">{curso.name}</h3>
      <h4 className="text-xl font-semibold">{curso.instructor}</h4>
      <p className="font-black">Progreso: <span>{curso.process}%</span></p>
    </div>
    <CrearEstrellas puntuacion={5} />
    <div className="flex justify-center px-20">
    <button className="font-bold text-white bg-rosa-rojiso hover:bg-rose-800 
                       transition-colors rounded-md text-xl w-full mb-2"> Entrar al curso</button>
    </div>
    
   </article>
  )
}

export default CursosCard
