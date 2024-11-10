import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Dispatch, SetStateAction, useState } from 'react';
import RadioAgrupado from './RadioAgrupado'
import { CrearCurso, TipoCurso } from '@/types/index';
import { useForm } from 'react-hook-form';


const plans:TipoCurso[] = [
    { name: 'Word' },
    { name: 'Excel' },
    { name: 'PowerPoint' },
  ];
type ModalCrearGrupoProps = {
    isOpen:boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export const ModalCrearGrupo = ({isOpen,setIsOpen}:ModalCrearGrupoProps) => {

    const [selected, setSelected] = useState<string>(plans[0].name);
    const initialVlaues:CrearCurso = {
        name:"",
        description:"",
    
    }
    const {register,handleSubmit,formState:{errors}} = useForm({defaultValues:initialVlaues})


    const handleCrearCurso=()=>{

    }
    const handleErrors = () =>{

    }
    return (

        <form action="" onSubmit={handleSubmit(handleCrearCurso,handleErrors)}>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
    {/* The backdrop, rendered as a fixed sibling to the panel container */}
    <DialogBackdrop className="fixed inset-0 bg-black/30" />

    {/* Full-screen container to center the panel */}
    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
      {/* The actual dialog panel */}
      <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
        <DialogTitle className="font-bold text-2xl text-slate-800 ">Llena el formulario para crear el curso</DialogTitle>
         <DialogTitle className="font-bold text-2xl ">Nombre del curso</DialogTitle>
        
         <input 
         {...register("name",{required:"La descripcion es obligatoria"})}
         type="text" className='w-full p-2 border-slate-500 border-2  rounded-lg ' />
         <DialogTitle className="font-bold text-2xl ">Descripcion del curso</DialogTitle>
         
         <textarea {...register("description",{required:"La descripcion es obligatoria"})} className='w-full p-2 border-slate-500 shadow-xl border-2 rounded-lg' name="nombreCurso" id="cursodescripcion"></textarea>

         
         <label htmlFor="">Selecciona el tipo de curso que va a ser</label>
            <RadioAgrupado selected={selected} setSelected={setSelected} plans={plans} />

        <button className='w-full bg-indigo-700 text-white font-bold py-2 rounded-lg'
                onClick={handleCrearCurso}
                >Crear curso</button>
        <button className='w-full bg-red-700 text-white font-bold py-2 rounded-lg' onClick={()=>setIsOpen(false)}>Cancelar</button>
       
      </DialogPanel>
    </div>
  </Dialog>
        </form>
    
  )
}
export default ModalCrearGrupo
/*
"name": "Curso de Word Intermedio",
    "description": "Perfecciona el uso de tablas, estilos y formatos avanzados en Word.",
    "tipoCurso": "word"
*/