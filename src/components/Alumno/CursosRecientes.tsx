import { CursoShort } from '@/types/index'
import imagenExcel from "@/assets/img/imagenExcel.png"
import imagenWord from "@/assets/img/imagenWord.png"
import { any } from 'zod'

type CursosRecientesProps = {
  curso: CursoShort
}

const cursosTipos = {
  word: imagenWord,
  excel: imagenExcel,
}

const CursosRecientes = ({ curso }: CursosRecientesProps) => {
  const cursoTipoImagen = cursosTipos[curso.tipoCurso] || null ;

  return (
    <article className='w-80 space-y-2 hover:scale-110 bg-white transition-all cursor-pointer'>
      <picture>
        {cursoTipoImagen && <img src={cursoTipoImagen} className='w-full' alt={`Imagen del curso ${curso.name}`} />}
      </picture>
      <div className='text-xl space'>
        <h2 className='font-bold'>{curso.name}</h2>
        <p className='text-slate-700 '>{curso.description}</p>
        <p>
        
        </p>
      </div>
    </article>
  )
}

export default CursosRecientes