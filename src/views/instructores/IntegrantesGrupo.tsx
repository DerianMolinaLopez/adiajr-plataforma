import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import cajaVacia from "@/assets/img/4826310.png"
import { getIntegrantes } from "@/api/InstructorApi"
//lo que debemos traer es el correo del alumno y el nombre, y debe haber un campo
//que despliegue una ventana modal, para agregar un alumno a determinado grupo
//por medio de el correo electornico
export const IntegrantesGrupo = () => {
    const params = useParams()
    //mandamos a traer el params
    const {idGrupo} = params! as {idGrupo:string}
    const {data:integrantes,isSuccess} = useQuery({
        queryKey:"integrantes",
        queryFn: ()=>getIntegrantes(idGrupo),
        enabled:!!idGrupo
    })
    if(isSuccess) console.log(integrantes)
  if(integrantes )return (
    <div className="px-20">
        <h2 className="font-bold text-4xl mt-5">Integrantes del grupo</h2>
        {integrantes.length>0?
        (
           <section className="grid grid-cols-4 mt-10">
              {integrantes.map(integrante=>(
                <div className="bg-white rounded text-center space-y-2 shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-700">{integrante.name}</h3>
                    <p>{integrante._id}</p>
                    <p>{integrante.email}</p>

                </div>
              ))}
           </section>
            
        )
        :
        (
            <section className="mt-32">
                <img src={cajaVacia} alt="caja vacia" className="w-48 mx-auto" />
                <p className="text-center mt-4 text-3xl font-bold text-indigo-800">No hay alumnos inscritos, <br />intenta compartiendo tu codigo de union <br />para ver reflejado a los integrantes</p>
            </section>

        )}
    </div>
  )
}
