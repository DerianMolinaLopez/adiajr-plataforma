import useAuthInstructor from "@/hooks/useAuthInstructor"
import { CardCursoCreacionTarea } from "@/components/Instructor/creacionTareas/CardCursoCreacionTarea";
export const CrearTareasView = () => {
    const {cursos} = useAuthInstructor();
    console.log(cursos)
    if(cursos)return (
    <div className="px-20">
        <h2 className="my-10 text-4xl font-bold">Selecciona el curso al cual quieres asignarle una tarea.</h2>
        <section className="grid grid-cols-3 overflow-auto altura-grupos-tareas gap-5">
          
            {
                cursos?.map(curso => <CardCursoCreacionTarea courseId={curso._id} key={curso._id} tipoCurso={curso.tipoCurso} name={curso.name} description={curso.description} />)
            }
        </section>
    </div>
  )
}
