import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { Dispatch, SetStateAction, useState } from 'react';
import RadioAgrupado from './RadioAgrupado';
import { CrearCurso, TipoCurso } from '@/types/index';
import { createGroup } from '@/api/InstructorApi';
import { useForm } from 'react-hook-form';
import {toast} from 'react-toastify'
import { useMutation, useQueryClient } from 'react-query';
import { QueryClient } from 'react-query';
const plans: TipoCurso[] = [
  { name: 'Word' },
  { name: 'Excel' },
  { name: 'Power' },
];

type ModalCrearGrupoProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const ModalCrearGrupo = ({ isOpen, setIsOpen }: ModalCrearGrupoProps) => {
  const [selected, setSelected] = useState<string>("");
  const queryCLient = useQueryClient()
  const initialValues: CrearCurso = {
    name: '',
    description: '',
  };
  const{mutate} = useMutation({
    mutationFn:createGroup,
    onError:(e:Error)=>{
        toast.error(e.message)
    },
    onSuccess:()=>{
   
        toast.success("Curso creado con exito")
        queryCLient.invalidateQueries("instructorUser")
        setIsOpen(false)
    }
  }) 
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

  const handleCrearCurso = (data: CrearCurso) => {
  
    mutate({
      name:data.name,
      description:data.description,
      tipoCurso:selected
    })

    
  };
   
  const handleErrors = (errors: any) => {
    console.log(errors);
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
    // Verificamos si también se seleccionó uno de los tipos de cursos
    if (!selected) toast.error('Selecciona el tipo de curso que quieres seleccionar');
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel */}
        <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
          <form onSubmit={handleSubmit(handleCrearCurso, handleErrors)}>
            <DialogTitle className="font-bold text-2xl text-slate-800">Llena el formulario para crear el curso</DialogTitle>
            <DialogTitle className="font-bold text-2xl">Nombre del curso</DialogTitle>
            <input
              {...register('name', { required: 'El nombre es obligatorio' })}
              type="text"
              className="w-full p-2 border-slate-500 border-2 rounded-lg"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            <DialogTitle className="font-bold text-2xl">Descripción del curso</DialogTitle>
            <textarea
              {...register('description', { required: 'La descripción es obligatoria' })}
              className="w-full p-2 border-slate-500 shadow-xl border-2 rounded-lg"
              name="description"
              id="description"
            ></textarea>
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            <label htmlFor="">Selecciona el tipo de curso que va a ser</label>
            <RadioAgrupado selected={selected} setSelected={setSelected} plans={plans} />
            <button
              type="submit"
              className="w-full bg-indigo-700 text-white font-bold py-2 rounded-lg"
            >
              Crear curso
            </button>
            <button
              type="button"
              className="w-full bg-red-700 text-white font-bold py-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ModalCrearGrupo;
/*
"name": "Curso de Word Intermedio",
    "description": "Perfecciona el uso de tablas, estilos y formatos avanzados en Word.",
    "tipoCurso": "word"
*/