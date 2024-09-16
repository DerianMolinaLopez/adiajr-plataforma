import { useQuery } from 'react-query'
import { getUser } from '@/api/userApi'
const UltimosCursos = () => {
    const {data,isSuccess} = useQuery({
        queryKey: 'user',
        queryFn: getUser
      })
      if(isSuccess) console.log(data)
/*
 * 1-obtener los datos del usuario
 * 2-obtener los cursos del usuario 
  */ 
 if(data) return (
    <section>
        <div className=' text-4xl mx-20 mt-10 space-y-10'>
        <h3 className='font-black'>Hola que bueno que estas de vuelta <span className='text-azul-claro'>{data.name}</span></h3>
        <h4 className='font-bold'>¿Estas listo para continuar?</h4>
        </div>
        
      
    </section>
  )
}

export default UltimosCursos
