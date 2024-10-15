import robotAzul from '@/assets/img/robotAzul.png'
import { Link } from 'react-router-dom'
import enter from "@/assets/enter.svg"
import { UserPlusIcon, UserIcon, LockClosedIcon } from "@heroicons/react/20/solid"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify'
import { UserRegisterForm } from '../../types'

import roborRojo from "@/assets/robotRojoCompleto.svg"
import roboramarillo from "@/assets/robotAmarilloCompleto.svg"
import { useMutation } from 'react-query'
import { registerUser } from '../../api/athApi'
import 'react-toastify/dist/ReactToastify.css';

const RegisterView = () => {
    const navigate = useNavigate()
    const initialValues: UserRegisterForm = {
        email: "",
        name: "",
        password: "",
        repeat_password: "",
        role: "student" // Valor por defecto
    }

    const { register, handleSubmit, 
        formState: { errors } } = useForm<UserRegisterForm>({ defaultValues: initialValues })
    const { mutate } = useMutation({
        mutationFn: registerUser,
        onError: (e: Error) => {
            toast.error(e.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            setTimeout(() => navigate('/auth/login'),1500)
            
        }
    })

    const submit = (data: UserRegisterForm) => {
        console.log(data)
        mutate(data)
    }

    const onError = (errors: any) => {
        console.log(errors)
        Object.keys(errors).forEach((key) => {
            toast.error(errors[key].message)
        })
    }

    return (
      
           
            <div className="contenedor-login-aida h-screen flex justify-center flex-col">
            <h3 className='text-white text-3xl px-36 text-center   font-bold  jos-font-900'>Empieza hoy a mejorar tu manejo de <br /> herramientas de oficina.</h3>
                <form onSubmit={handleSubmit(submit, onError)} className="bg-white mx-auto anchura-formulario">
                    <div className='flex justify-center'>
                        <button onClick={() => navigate('/auth/login')}
                            className='w-1/2 text-center py-5 flex justify-center color-fondo-login-select '>
                            <span className='text-semibold text-xl text-slate-400 font-inter'>
                                Inicio de sesion
                            </span>
                            <img src={enter} className='ml-3 w-8' alt="Icono de entrar" />
                        </button>
                        <button onClick={() => navigate('/auth/register')} className='w-1/2 text-center py-5 flex justify-center ' >
                            <span className='text-semibold text-xl letra-color-login-select font-inter '>
                                Crear una cuenta
                            </span>
                            <UserPlusIcon className='ml-3 w-6 text-slate-500' />
                        </button>
                    </div>
                    <picture className="block mx-auto my-4">
                        <img className="block mx-auto w-40" src={robotAzul} alt="logo robot azul" />
                    </picture>
                    <div className='mx-10 flex flex-col space-y-5 my-10'>
                        <div className='bg-gray-100 rounded-xl p-2 flex items-center shadow-md justify-center h-full'>
                            <UserIcon className='w-8 text-slate-500' />
                            <input  {...register("email", {
                                required: "El email es requerido",
                            })}
                                type="email" placeholder='Email del usuario'
                                className="block w-full border-none p-2 border bg-gray-100 rounded placeholder:font-semibold " />
                        </div>
                        <div className='bg-gray-100 rounded-xl p-2 flex items-center shadow-md justify-center h-full'>
                            <UserIcon className='w-8 text-slate-500' />
                            <input  {...register("name", {
                                required: "El nombre es requerido",
                            })}
                                type="text" placeholder='Nombre del usuario'
                                className="block w-full border-none p-2 border bg-gray-100 rounded placeholder:font-semibold " />
                        </div>
                        <div className='bg-gray-100 rounded-xl p-2 flex items-center justify-center shadow-md h-full'>
                            <LockClosedIcon className='w-8 text-slate-500' />
                            <input  {...register("password", {
                                required: "El password es requerido",
                            })}
                                type="password" placeholder='Contraseña del usuario'
                                className="block w-full border-none p-2 border bg-gray-100 rounded placeholder:font-semibold " />
                        </div>
                        <div className='bg-gray-100 rounded-xl p-2 flex items-center justify-center h-full shadow-md'>
                            <LockClosedIcon className='w-8 text-slate-500' />
                            <input  {...register("repeat_password", {
                                required: "La confirmación de contraseña es requerida",
                            })}
                                type="password" placeholder='Confirmar contraseña'
                                className="block w-full border-none p-2 border border-gray-300 rounded placeholder:font-semibold bg-gray-100 " />
                        </div>

                        {/* Aquí se añaden los radio buttons */}
                        <div className='flex justify-between mx-10 text-black'>
    <div className="flex items-center mb-4">
        <input id="instructor" type="radio" value="instructor" {...register("role", {
            required: "Selecciona un rol",
        })} name="role" className="w-4 text-black h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="instructor" className="ms-2 text-sm font-semibold">Instructor</label>
    </div>
    <div className="flex items-center">
        <input id="estudiante" type="radio" value="estudiante" {...register("role", {
            required: "Selecciona un rol",
        })} name="role" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="estudiante" className="ms-2 text-sm font-semibold">Estudiante</label>
    </div>
</div>

                        
                    </div>
                    <div className='flex justify-center'>
                        <input type="submit" value={"Crear cuenta"}
                            className='bg-azul-rebajado-fondo rounded-full font-bold p-2 px-10 py-3  
                                 text-xl text-white hover:bg-azul-rebajado-hover duration-100
                                 cursor-pointer transition-colors' />
                    </div>
                    <div className='flex justify-center my-5'>
                           <Link to="/auth/forgot" className='text-center w-full text-blue-700'>¿No recuerdas tu contraseña?</Link>
                    </div>
                </form>
                <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            </div>
           
    
    )
}

export default RegisterView
