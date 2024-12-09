import { useQuery } from 'react-query';
import CursosRecientes from './CursosRecientes';
import { getUser, getTopCourses } from '@/api/userApi';
import cajaVacia from "@/assets/img/caja-vacia.png";

const UltimosCursos = () => {
  // Query para traer información del usuario
  const { data: user } = useQuery({
    queryKey: 'user',
    queryFn: getUser
  });

  // Query para traer la información de los cursos del usuario
  const { data: cursos } = useQuery({
    queryKey: 'cursos',
    queryFn: getTopCourses
  });

  console.log("ULTIMOS CURSOS AGREGADOS:", cursos);

  if (user && cursos) return (
    <section>
      {cursos.length > 0 ? (
        <div className='text-4xl mx-20 mt-10 space-y-10'>
          <h3 className='font-black'>Hola que bueno que estas de vuelta <span className='text-azul-claro'>{user.name}</span></h3>
          <h4 className='font-bold'>¿Estas listo para continuar?</h4>
          <section className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {cursos.slice(0, 3).map(curso => <CursosRecientes key={curso._id} curso={curso} />)}
          </section>
        </div>
      ) : (
        <>
          <h2 className='text-4xl px-20 font-bold'>Parece que aun no estas inscrito a un curso</h2>
          <h2 className='text-2xl px-20 font-bold mb-4'>Intenta viendo los que tenemos para ti</h2>
          <img src={cajaVacia} className='caja-vacia mx-auto' alt="Imagen de caja vacia" />
        </>
      )}
    </section>
  );

  return null;
};

export default UltimosCursos;