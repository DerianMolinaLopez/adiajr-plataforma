import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import React, { Dispatch, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getSectionsByCourse } from "@/api/userApi";
import dayjs from "dayjs";
import { DialogContent } from "@mui/material";
import { TareaCreacion } from "@/types/index";
import { useMutation } from "react-query";
import {creaetHomework} from "@/api/InstructorApi"
import {toast} from "react-toastify";
type ModalCrearTareaSeccionProps = {
  tittle: string;
  description: string;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  courseId: string;
};

export const ModalCrearTareaSeccion = ({ tittle, description, setIsOpen, isOpen, courseId }: ModalCrearTareaSeccionProps) => {
  const [selectedDateISO, setSelectedDateISO] = useState<string>('');
  const [selectedDateDisplay, setSelectedDateDisplay] = useState<string>('');
  const [seleccionado, setSeleccionado] = useState<string>(''); // curso seleccionado
  const [descriptionTarea, setDescriptionTarea] = useState<string>('');
  const { data, } = useQuery({
    queryKey: ['sections', courseId],
    queryFn: () => getSectionsByCourse(courseId),
    enabled: !!courseId, // Asegúrate de que la query solo se ejecute si courseId tiene un valor
  });
  const {mutate} = useMutation({
    mutationFn:creaetHomework,
    onError:()=>{
      toast.error("Error al crear la tarea")  
    },
    onSuccess:()=>{
      //reiniciamos todos los estados
   
      toast.success("Tarea creada con exito")
      setTimeout(()=>{ // mas adeelante aqui necesitare una revalidacion de query
        setSeleccionado('')
        setDescriptionTarea('')
        setSelectedDateDisplay('')
        setSelectedDateISO('')
        setIsOpen(false)
      },5000)
      
    }
  })

  useEffect(() => {
    if (selectedDateISO) {
      console.log(selectedDateISO);
    }
  }, [selectedDateISO]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateISO = dayjs(event.target.value).format('YYYY-MM-DDTHH:mm:ssZ');
    const dateDisplay = dayjs(event.target.value).format('DD/MM/YY');
    setSelectedDateISO(dateISO);
    setSelectedDateDisplay(dateDisplay);
  };
  const handleSubmit = () =>{

    //hacemos las validaciones correctas
    if(description === '' || seleccionado === '' || selectedDateISO === '' || descriptionTarea === ''){
      toast.error("Debes de llenar todos los campos")
      return 
    }
    const obj:TareaCreacion = {
      title:tittle,
      description:descriptionTarea,
      course:courseId,
      endDate:selectedDateISO,
      Section:seleccionado
    }

    mutate(obj)
    /*
    {
    "title":"asdasd",
    "description":"asdasdas",
    "course":"67423c9be87ba0c3ce9e0e26",
    "endDate":"2024-12-01T10:15:30Z",
    "Section":"674cad596632b752b9b58ce0"

}
    */
   
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-rojo-brilloso font-bold w-full text-white rounded border-b-4 border-red-600
                            hover:bg-red-600 p-2 hover:scale-105 transition-all hover:border-red-500"
      >
        Agregar Tarea
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel */}
          <DialogPanel className=" max-2xl space-y-4 bg-white p-12 rounded-lg overflow-auto altura-grupos-tareas-modal">
            <DialogPanel className={"border-b-2 border-b-slate-400"}>
              <DialogTitle className="font-bold text-slate-600 text-4xl"> {tittle}</DialogTitle>
            </DialogPanel>

            <Description>
              {description}
            </Description>
            <DialogContent>
              <h2 className="text-2xl font-bold">Selecciona la sección a la que quieres asignar la tarea</h2>
              <section className="overflow-auto ">
                {data?.sections.map((section) => (
                  <div
                    key={section._id}
                    className="cursor-pointer shadow-lg border-slate-100 border-2 my-2 rounded-lg hover:bg-gray-200 p-2"
                    onClick={() => setSeleccionado(section._id)}
                  >
                    <h3 className="text-2xl font-bold">{section.name}</h3>
                    <p>{section.description}</p>
                  </div>
                ))}
              </section>
            </DialogContent>
            {seleccionado !== '' && (
              <>
              <div className="flex flex-row">
                <div className="flex flex-col w-3/4">
                  <label htmlFor="" className="text-2xl font-bold">Ingresa las indicaciones de la tarea</label>
                  <textarea
                  value={descriptionTarea}
                  onChange={(e)=>setDescriptionTarea(e.target.value)}
                    className="border-2 border-slate-400 rounded-2xl p-2 w-full h-32"
                    cols={30}
                    rows={10}
                    name="description"
                    id="description"
                  ></textarea>
                </div>

                <div className="flex flex-col px-10">
                  <label htmlFor="dueDate" className="text-2xl font-bold">Fecha de entrega</label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={selectedDateISO.split('T')[0]} // Mostrar solo la parte de la fecha
                    onChange={handleDateChange}
                    className="border-2 border-slate-400 rounded-2xl p-2 w-full"
                  />
                  {selectedDateDisplay && <p className="text-red-600 font-bold ">La fecha seleccionada: {selectedDateDisplay} <br /> asegurate que es la que deseas</p>}
                </div>
              
              </div>
              <button onClick={handleSubmit} className="bg-azul-rebajado-fondo text-amber-300 rounded shadow-sm py-2 w-full font-bold">Asignar tarea</button>
              </>
              
            )}
          </DialogPanel>
        </div>
        
      </Dialog>
    </>
  );
};

export default ModalCrearTareaSeccion;