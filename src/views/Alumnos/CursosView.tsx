import derecha from '@/assets/derecha.svg';
import Puntuaciones from '@/components/Alumno/cursos/Puntuaciones';
import { PuntuacionesProps } from '@/components/Alumno/cursos/Puntuaciones';
import progreso from '@/assets/progreso.svg';
import check from '@/assets/check.svg';
import medallaOro from '@/assets/medallaOro.svg';
import lapiz from '@/assets/lapiz.svg';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { getCourseByStudent } from '@/api/userApi';
import CursosRecientes from '@/components/Alumno/CursosRecientes';
import CursosCard from '@/components/Alumno/cursos/CursosCard';
import { Curso } from '@/types/index';

const puntuaciones: PuntuacionesProps[] = [
  {
    puntuacion: 4,
    texto: "Cursos en progreso",
    icono: <img src={lapiz} className='w-14' alt="Imagen de flecha" />
  },
  {
    puntuacion: 1,
    texto: "Cursos finalizados",
    icono: <img src={progreso} className='w-14' alt="Imagen de flecha" />
  },
  {
    puntuacion: 4,
    texto: "Total de secciones estudiadas",
    icono: <img src={check} className='w-14' alt="Imagen de flecha" />
  },
  {
    puntuacion: 2,
    texto: "Medallas ganadas",
    icono: <img src={medallaOro} className='w-14' alt="Imagen de flecha" />
  }
];

const CursosView = () => {
  const [nombreCurso, setNombreCurso] = useState('');
  const [cursos, setCursos] = useState<Curso[]>([]);
  const { data } = useQuery({
    queryFn: getCourseByStudent,
    queryKey: 'cursos-estudiante'
  });

  useEffect(() => {
    console.log("hola mundo");
    if (data) {
      const cursosFiltrados = data.filter((curso: Curso) =>
        curso.name.toLowerCase().includes(nombreCurso.toLowerCase())
      );
      console.log(cursosFiltrados);
      setCursos(cursosFiltrados);
    }
  }, [nombreCurso, data]);

  return (
    <div className="pt-32">
      <div className='bg-white'>
        <section className="bg-azul-fondo px-10 rounded-t-xl">
          <h2 className="text-4xl text-white font-bold p-3">Cursos</h2>
        </section>
        <article className='bg-white'>
          <div className='px-20 pt-5'>
            <input
              type="text"
              className='border-2 px-4 text-xl border-slate-300 w-64 h-12 rounded-lg'
              placeholder='Buscar curso'
              value={nombreCurso}
              onChange={e => setNombreCurso(e.target.value)}
            />
          </div>
        </article>
        <article className='grid grid-cols-4 bg-azul-verde-bajo px-10 mt-10'>
          {puntuaciones.map((item, index) => (
            <Puntuaciones
              key={index}
              puntuacion={item.puntuacion}
              texto={item.texto}
              icono={item.icono}
            />
          ))}
        </article>
        <section className='grid grid-cols-4 px-2 mt-5'>
          {cursos.map(curso => (
            <CursosCard curso={curso} key={curso._id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default CursosView;