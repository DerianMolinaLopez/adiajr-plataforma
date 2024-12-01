import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import React, { Dispatch } from "react";
import { useQuery } from "react-query";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { getSectionsByCourse } from "@/api/userApi";

import { DialogContent } from "@mui/material";
import {useState,useEffect} from "react";

type ModalCrearTareaSeccionProps = {
    tittle: string;
    description: string;    
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
    courseId:string;
}

/*
EN ESTE MODAL VAMOS A MANDAR A BUSCAR TODAS LAS SECCIONES QUE PERTENECEN AL CURSO
*/
export const ModalCrearTareaSeccion = ({tittle,description,setIsOpen,isOpen,courseId}:ModalCrearTareaSeccionProps) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['sections', courseId], // Asegúrate de definir `courseId`
        queryFn: () => getSectionsByCourse(courseId), // Asegúrate de definir `courseId`
      });
      const [seleccionado, setSleccionados] = useState<string>('');//curso seleccionado
      //console.log(data)
      useEffect(()=>{

        if(seleccionado!==''){
          console.log(seleccionado)
        }
      },[seleccionado])
  return (
    <>
    <button
      onClick={() => setIsOpen(true)}
      className="bg-rojo-brilloso font-bold w-full text-white rounded border-b-4 border-red-600
                            hover:bg-red-600 p-2 hover:scale-105 transition-all hover:border-red-500"
    >
      Agregar Tarea
    
    </button>
    <Dialog  open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
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
              <section className="overflow-auto h-40">
              {
                  data?.sections.map((section) => 
                      <>
                      <div key={section._id} className="cursor-pointer shadow-lg border-slate-100 border-2 my-2 rounded-lg hover:bg-gray-200 p-2" onClick={()=> setSleccionados(section._id)}>
                        <h3 className="text-2xl font-bold">{section.name}</h3>
                        <p>{section.description}</p>
                      </div>
                      
                    </>
                    
                  )
              }
              </section>
         </DialogContent>
         {seleccionado!=''&&(
          <div className="flex flex-row-reverse">
          <div className="flex flex-col">
            <label htmlFor="" className="text-2xl">Ingresa las indicaciones de la tarea</label>
             <textarea className="border-2 border-slate-400 rounded-2xl p-2" name="" id=""></textarea>
          </div>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
                             <DateCalendar />
                         </LocalizationProvider>
          </div>
          
         
         )}

          
        </DialogPanel>
      </div>
    </Dialog>
    
  </>
  )
}
export default ModalCrearTareaSeccion;
