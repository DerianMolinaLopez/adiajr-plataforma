
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { CursosShort } from '@/types/index'
import { CardCodigoUnion } from './CardCodigoUnion'
import { generarCodigoUnion } from '@/api/InstructorApi'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useQueryClient } from 'react-query'
type ModalCrearCodigoUnionProps = {
  cursos:CursosShort[]
}

export default function ModalCrearCodigoUnion({cursos}:ModalCrearCodigoUnionProps) {
  let [isOpen, setIsOpen] = useState(false)
   const queryClient = useQueryClient()
    const { mutate } = useMutation({
    mutationFn: generarCodigoUnion,
    mutationKey: 'codigoUnion',
    onSuccess: () => {
      toast.success('Codigo de union creado con exito')
      queryClient.invalidateQueries('instructorUser')
      setIsOpen(false)
    }
  });
  const handleSelectCurso = (curso:CursosShort["_id"])=>{
    console.log(curso)
    //peticion http....
    mutate(curso)
  }
  return (
    <>
      <button className='text-white bg-emerald-600 border-b-4 border-b-emerald-800 rounded-xl p-2' onClick={() => setIsOpen(true)}>Crear codigo de union </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="w-2/4 space-y-4 bg-white p-12">
            <DialogTitle className="font-bold text-2xl">Escoge el curso del cual quieres crear un codigo de union</DialogTitle>
            <Description>En dado caso de que ya tenga un codigo de union de ese curso, al seleccionarlo aqui, se generara un nuevo codigo.</Description>
            <div className= "overflow-auto h-96 space-y-2 ">
            {cursos.map(curso=>(
              <CardCodigoUnion handleSelectCurso={handleSelectCurso} key={curso._id} curso={curso}/>
            ))}
            </div>
            
            
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}