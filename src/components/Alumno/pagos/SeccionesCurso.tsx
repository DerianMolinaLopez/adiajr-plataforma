
import { Section } from "@/types/index"

type SeccionesCursoProps = {
    secciones:Section[]
}
const SeccionesCurso = ({secciones}:SeccionesCursoProps) => {
    console.log(secciones)
  return (
   <section className="px-20">
    <article className="">
        {secciones.map((seccion,index)=>(
            <div key={index} className="size-w  shadow-xl p-2 border-b-2
             bg-gray-100   border-2 border-slate-400
             
             ">
                <h3 className="text-2xl font-semibold">{seccion.name}</h3>
                <p className="text-slate-600">{seccion.description}</p>
            </div>
        ))}
    </article>
   </section>
  )
}

export default SeccionesCurso
