
import useAuthInstructor from '@/hooks/useAuthInstructor'
import { CardTareas } from './CardTareas'
//aqui voy a mostrar todas las tareas
export const TareasView = () => {
const {tareas} = useAuthInstructor()
console.log(tareas)
  return (
    <div className='px-20 mt-10'>
        <h3 className='text-4xl font-bold'>Tareas asignadas</h3>
        <section className='grid grid-cols-3 mt-10 gap-4'>
          {
            tareas?.map(tarea=> <CardTareas key={tarea.course._id} _id={tarea._id} title={tarea.title}
                                            description={tarea.description} course={tarea.course} endDate={tarea.endDate}/>)
          }
        </section>
    </div>
  )
}
