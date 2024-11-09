import React, { useState, useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';
import { cursosTipos } from '@/helpers/diferenciacionTipos';
import {CursoBackUnionCode} from '@/types/index';
import { unirseCursoPorcodigoUnion} from '@/api/userApi';
import {toast} from 'react-toastify';
import { useQueryClient } from 'react-query';
import { useMutation } from 'react-query';
type ModalCursoEncontradoProps = {
  curso: CursoBackUnionCode | undefined; // Ajusta el tipo según sea necesario
};

export const ModalCursoEncontrado = ({ curso }: ModalCursoEncontradoProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClinet = useQueryClient()
  const [imagen,setImagen] = useState<string>('')
  const {mutate} = useMutation({
    mutationFn:unirseCursoPorcodigoUnion,
    onSuccess:()=>{
      queryClinet.invalidateQueries('cursos-estudiante')
    //  console.log(data) //puede marcar undefined por qeu el metodo no esta regresando nada
      toast.success("Te has unido al curso con exito")
      setIsOpen(false)
    },
    onError:(error)=>{
      
      console.log("problemas")
    }
  })
  


  useEffect(() => {
    if (curso !== undefined) {
        //@ts-ignore
        setImagen(cursosTipos[curso?.tipoCurso]) 
      setIsOpen(true);
    }
  }, [curso]);
  const handleUnirCurso =()=>{//* LO UNICO QUE NECESITAMOS ES EL ID DEL CURSO EL CUAL PARA CUANDO YA SALE EL MDOAL, SIGNIFICA QUE YA FUE ENCONTRADO
    console.log("desde ele vento")
    if(curso){ //con esto me aseguro que el curso no sea undefined
          mutate(curso?._idCurso)
    }

  }

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel */}
          <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
            <DialogTitle className="font-bold text-2xl ">¿Este es el curso que estas buscando?</DialogTitle>
            <Description className="text-2xl">{curso?.name}</Description>
        
             <img src={imagen} className=' ' alt="imagen de aida" />
            <Description className="text-xl">{curso?.description}</Description>
            <Description className="text-xl text-slate-800 font-semibold">Instructor:{' '}{curso?.instructor.name}</Description>

            <button className='w-full bg-indigo-700 text-white font-bold py-2 rounded-lg'
                    onClick={handleUnirCurso}
                    >Unirse</button>
            <button className='w-full bg-red-700 text-white font-bold py-2 rounded-lg' onClick={()=>setIsOpen(false)}>Cancelar</button>
           
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default ModalCursoEncontrado;