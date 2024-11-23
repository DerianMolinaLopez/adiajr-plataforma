import { CursoShort } from '@/types/index'
import { cursosTipos } from '@/helpers/diferenciacionTipos'

type CursosRecientesProps = {
  curso: CursoShort
}

const CursosRecientes = ({ curso }: CursosRecientesProps) => {
  //@ts-ignore
  const cursoTipoImagen = cursosTipos[curso.tipoCurso] || null ;

  return (
    <article className='w-80 space-y-2  my-2 hover:scale-110 p-2 border border-slate-400 bg-white shadow-xl rounded-xl transition-all cursor-pointer'>
      <picture className=''>
        {cursoTipoImagen && <img src={cursoTipoImagen} className='w-full rounded-sm' alt={`Imagen del curso ${curso.name}`} />}
      </picture>
      <div className='text-xl space'>
        <h2 className='font-bold'>{curso.instructor}</h2>
        <h2 className='font-semibold'>{curso.name}</h2>
        <p className='text-slate-700 '>{curso.description}</p>
        <p>
        
        </p>
      </div>
    </article>
  )
}

export default CursosRecientes