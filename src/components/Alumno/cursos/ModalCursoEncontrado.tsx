import React, { useState, useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';
import { cursosTipos } from '@/helpers/diferenciacionTipos';
import {CursoBackUnionCode} from '@/types/index';
type ModalCursoEncontradoProps = {
  curso: CursoBackUnionCode | undefined; // Ajusta el tipo según sea necesario
};

export const ModalCursoEncontrado = ({ curso }: ModalCursoEncontradoProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imagen,setImagen] = useState<string>('')
  


  useEffect(() => {
    if (curso !== undefined) {
        //@ts-ignore
        setImagen(cursosTipos[curso?.tipoCurso]) 
      setIsOpen(true);
    }
  }, [curso]);

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
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default ModalCursoEncontrado;