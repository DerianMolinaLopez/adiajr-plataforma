
import Puntuaciones from '@/components/Alumno/cursos/Puntuaciones';
import { PuntuacionesProps } from '@/components/Alumno/cursos/Puntuaciones';
import progreso from '@/assets/progreso.svg';
import check from '@/assets/check.svg';
import medallaOro from '@/assets/medallaOro.svg';
import lapiz from '@/assets/lapiz.svg';
import { useQuery } from 'react-query';
import { searchWithUnionCode} from '@/api/userApi';
import {toast} from 'react-toastify';
import { useState,  } from 'react';
import { getCourseByStudent } from '@/api/userApi';

import CursosCard from '@/components/Alumno/cursos/CursosCard';
import {  cursoBackUnionCode, CursoBackUnionCode } from '@/types/index';
import ModalCursoEncontrado from '@/components/Alumno/cursos/ModalCursoEncontrado';

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


/**
 * 
 * DEMACIADOS PROBLEMAS CON EL RETORNO DE LOS CURSOS
 */

const CursosView = () => {
  const [nombreCurso, setNombreCurso] = useState('');
  const [unioncode,setUnionCode] = useState<string>('');
  const [cursoEncontrado,setCursoEncontrado] = useState<CursoBackUnionCode >();
 // const [cursos, setCursos] = useState<Curso[]>([]);
  const { data } = useQuery({
    queryFn: getCourseByStudent,
    queryKey: 'cursos-estudiante',
    
  });


 

  const handleSubmitUnionCode = async () => {
   const data =await searchWithUnionCode(unioncode);
   if(data=="error") toast.error("Codigo de union no valido");
     const res = cursoBackUnionCode.safeParse(data);  
      if(res.success){
        setCursoEncontrado(res.data);
      }

  }
  
if(data)return (
    <div className="pt-32">
      <div className='bg-white'>
        <section className="bg-azul-fondo px-10 rounded-t-xl">
          <h2 className="text-4xl text-white font-bold p-3">Cursos</h2>
        </section>
        <article className='bg-white'>
          <div className='px-20 pt-5 flex justify-between'>
            <input
              type="text"
              className='border-2 px-4 text-xl border-slate-300 w-64 h-12 rounded-lg'
              placeholder='Buscar curso'
              value={nombreCurso}
              onChange={e => setNombreCurso(e.target.value)}
            />
            <div className='flex justify-between gap-7'>
              <input type="text" placeholder='Codigo de union' 
              value={unioncode}
              onChange={e => setUnionCode(e.target.value)}
              className='border-2 px-4 text-xl border-slate-300 w-64 h-12 rounded-lg' />
              <button 
              onClick={handleSubmitUnionCode}
              className='bg-lima font-bold text-white px-2 rounded-md uppercase'>
                Unirme
              </button>
            </div>
          </div>
        </article>
        <article className='grid grid-cols-4 bg-azul-verde-bajo px-10 mt-10'>
          
        </article>
        <section className='grid grid-cols-4 gap-4 px-2 mt-5'>
          {
          //@ts-ignore
          data.map(curso => (
            <CursosCard valoracion={curso.valoracion} curso={curso} key={curso._id} />
          ))}
        </section>
      </div>
      <ModalCursoEncontrado curso={cursoEncontrado}/>
    </div>
  );
};

export default CursosView;