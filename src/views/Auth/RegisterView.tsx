import robotAzul from '@/assets/img/robotAzul.png'
import { Link } from 'react-router-dom'
import enter from "@/assets/enter.svg"
import { UserPlusIcon, UserIcon, LockClosedIcon } from "@heroicons/react/20/solid"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify'
import { UserRegisterForm } from '../../types'
import 'react-toastify/dist/ReactToastify.css';

const RegisterView = () => {
    const navigate = useNavigate()
    const initialValues: UserRegisterForm = {
        email: "",
        name: "",
        password: "",
        password_confirmation: ""
    }

    const { register, handleSubmit, 
        formState: { errors } } = useForm<UserRegisterForm>({ defaultValues: initialValues })

    const submit = (data: any) => {
        // Aquí puedes manejar el envío del formulario
        console.log(data)
    }

    const onError = (errors: any) => {
       console.log(errors)
       Object.keys(errors).forEach((key) => {
           toast.error(errors[key].message)
       }
    )
    }

    return (
        <>
            <div className="h-screen w-screen bg-azul-rebajado-fondo flex justify-center items-center">
                <form onSubmit={handleSubmit(submit, onError)} className="bg-blanco-rebajado anchura-formulario">
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
                        <div className='bg-gris-oscurecido rounded-xl p-2 flex items-center justify-center h-full'>
                            <UserIcon className='w-8 text-slate-500' />
                            <input  {...register("email", {
                                required: "El email es requerido",
                            })}
                                type="email" placeholder='Email del usuario'
                                className="block w-full border-none p-2 border border-gray-300 rounded placeholder:font-semibold bg-gris-oscurecido" />
                        </div>
                        <div className='bg-gris-oscurecido rounded-xl p-2 flex items-center justify-center h-full'>
                            <UserIcon className='w-8 text-slate-500' />
                            <input  {...register("name", {
                                required: "El nombre es requerido",
                            })}
                                type="text" placeholder='Nombre del usuario'
                                className="block w-full border-none p-2 border border-gray-300 rounded placeholder:font-semibold bg-gris-oscurecido" />
                        </div>
                        <div className='bg-gris-oscurecido rounded-xl p-2 flex items-center justify-center h-full'>
                            <LockClosedIcon className='w-8 text-slate-500' />
                            <input  {...register("password", {
                                required: "El password es requerido",
                            })}
                                type="password" placeholder='Contraseña del usuario'
                                className="block w-full border-none p-2 border border-gray-300 rounded placeholder:font-semibold bg-gris-oscurecido" />
                        </div>
                        <div className='bg-gris-oscurecido rounded-xl p-2 flex items-center justify-center h-full'>
                            <LockClosedIcon className='w-8 text-slate-500' />
                            <input  {...register("password_confirmation", {
                                required: "La confirmación de contraseña es requerida",
                            })}
                                type="password" placeholder='Confirmar contraseña'
                                className="block w-full border-none p-2 border border-gray-300 rounded placeholder:font-semibold bg-gris-oscurecido" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <input type="submit" value={"Crear cuenta"}
                            className='bg-azul-rebajado-fondo rounded-full font-bold p-2 px-10 py-3  
                                 text-xl text-white hover:bg-azul-rebajado-hover duration-100
                                 cursor-pointer transition-colors' />
                    </div>
                    <div className='flex justify-center my-5'>
                        <Link to="#" className='text-center w-full '>¿Ya tienes una cuenta? </Link>
                        <Link to="#" className='text-center w-full'>¿No recuerdas tu contraseña?</Link>
                    </div>
                </form>
            </div>
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
        </>
    )
}

export default RegisterView
