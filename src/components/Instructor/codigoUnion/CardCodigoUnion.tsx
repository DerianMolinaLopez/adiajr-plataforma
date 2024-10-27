
 import {CursosShort} from '@/types/index'
type CardCodigoUnionProps = {
    curso:CursosShort
    handleSelectCurso:(curso:CursosShort["_id"])=>void
}
export const CardCodigoUnion = ({curso,handleSelectCurso}:CardCodigoUnionProps) => {
  return (
    <div  
     onClick={()=>handleSelectCurso(curso._id)}
     className='cursor-pointer hover:bg-gray-300 transition-colors duration-125 ease-in-out'>
    <h2 className="font-bold text-2xl">{curso.name}</h2>
    <p className="text-xl">{curso.description}</p>
  </div>
  )
}
