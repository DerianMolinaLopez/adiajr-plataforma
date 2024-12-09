import {  Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { FieldErrors, useForm } from 'react-hook-form';
import { formInputConfirmPayment,  EnvioConfirmarCursoPassword } from '@/types/index';
import ojoTarjeta from "@/assets/tarjeta-ojo.svg";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import { addUserCourse } from '@/api/userApi';
import { toast } from 'react-toastify';


type ConfirmarCompraCursoProps = {
    costo :number
    idCurso:string
    idINstrcutor:string
}
const ConfirmarCompraCurso = ({costo,idCurso,idINstrcutor}:ConfirmarCompraCursoProps) => {
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const id = queryParam.get("idcurso")!;
    const { mutate } = useMutation({
        mutationKey: 'confirmar-compra',
        mutationFn: addUserCourse,
        onError: (error: Error) => {
            toast.error(error.message);
        },
        onSuccess: (data: any) => {
            toast.success(data);
            setIsOpen(false);
        }
    });
    let [isOpen, setIsOpen] = useState(false);

    const initialValues: formInputConfirmPayment = {
        password: "",
        securityNumbers: ""
    };
    const { formState: { errors }, register, handleSubmit } = useForm<formInputConfirmPayment>({ defaultValues: initialValues });

    const onSubmit = (data: formInputConfirmPayment) => {
      /*
        curso:"",
    costo:"",
    intructor:"",
    password:string,
    securityNumbers:string,
      */
        const objEnvio: EnvioConfirmarCursoPassword  = {
            id_course: id,
            //@ts-ignore
            curso: id,
            //@ts-ignore
            costo: costo,
            instructor:idINstrcutor,
            password: data.password,
            securityNumbers: data.securityNumbers

          
        };
        // Petición mutation para agregar al usuario al curso
        console.log(objEnvio)
        
        mutate(objEnvio);
    };

    const onError = (errors: FieldErrors<formInputConfirmPayment>) => {
  
        Object.keys(errors).forEach((key) => {
         
            toast.error(errors[key]?.message);
        });
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-800 mt-10 hover:bg-blue-600 font-semibold text-white text-xl p-2 rounded-lg">
                Confirmar compra
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 ">
                <DialogBackdrop className="fixed inset-0 bg-black/30" />

                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
                        <DialogTitle className="font-bold text-2xl">
                            Ingresa tu contraseña para confirmar la compra.
                        </DialogTitle>
                        <DialogTitle className="font-bold">
                            Y los <span className='text-rose-700'>numeros de seguridad.</span>
                        </DialogTitle>
                        <form className='space-y-2' onSubmit={handleSubmit(onSubmit, onError)}>
                            <input
                                {...register('password', { required: "La contraseña es requerida" })}
                                type="password"
                                className='border border-slate-400 shadow-lg rounded p-2 w-full'
                                placeholder='Contraseña del usuario' />
                            <div className='flex'>
                                <input
                                    {...register('securityNumbers', { required: "Los números de seguridad son requeridos" })}
                                    type="text"
                                    className='border border-slate-400 w-52 shadow-lg rounded p-2 block'
                                    placeholder='Numeros de seguridad' />
                                <img className='w-12' src={ojoTarjeta} alt="icono de tarjeta" />
                            </div>

                            <input type="submit"
                                className='bg-azul-rebajado-fondo text-white font-bold p-2 rounded-sm
                             cursor-pointer hover:bg-azul-rebajado-hover transition-colors'
                                value="Confirmar compra" />
                        </form>

                        <div className="flex gap-4">
                            <button className='bg-rose-600 hover:bg-rose-700 transition-colors
                              text-white font-semibold px-2 py-1' onClick={() => setIsOpen(false)}>Regresar</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};

export default ConfirmarCompraCurso;
