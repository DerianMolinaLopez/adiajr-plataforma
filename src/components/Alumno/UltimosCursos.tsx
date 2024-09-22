import { useQuery } from 'react-query'
import CursosRecientes from './CursosRecientes'
import { getUser,getTopCourses } from '@/api/userApi'
const UltimosCursos = () => {
  //query para traer informacion del usuairo
    const {data,isSuccess} = useQuery({
        queryKey: 'user',
        queryFn: getUser
      })
    const {data:cursos,isSuccess:cursosSuccess} = useQuery({
        queryKey: 'cursos',
        queryFn: getTopCourses
    })
     // if(isSuccess) console.log(data)
     // if(cursosSuccess) console.log(cursos)
  //query para traer la informacion de los cursos del usuario
/*
 * 1-obtener los datos del usuario
 * 2-obtener los cursos del usuario 
  */ 
 if(data) return (
    <section>
      {cursos&&(
        <div className=' text-4xl mx-20 mt-10 space-y-10'>
        <h3 className='font-black'>Hola que bueno que estas de vuelta <span className='text-azul-claro'>{data.name}</span></h3>
        <h4 className='font-bold'>¿Estas listo para continuar?</h4>
        {cursos.map(curso=><CursosRecientes key={curso._id} curso={curso}/>)}
        </div>
      )}
        
    </section>
  )
}

export default UltimosCursos
