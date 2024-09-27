
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
            <div key={index} className="size-w bg-white shadow-xl rounded-lg p-3 my-3">
                <h3 className="text-2xl font-semibold">{seccion.name}</h3>
                <p className="text-slate-600">{seccion.description}</p>
            </div>
        ))}
    </article>
   </section>
  )
}

export default SeccionesCurso
