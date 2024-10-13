import robotAzul from '@/assets/img/robotAzul.png'
import { Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import enter from "@/assets/enter.svg"
import { UserPlusIcon, UserIcon, LockClosedIcon } from "@heroicons/react/20/solid"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { UserLoginForm} from '../../types'

import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from 'react-query'
import roborRojo from "@/assets/robotRojoCompleto.svg"
import roboramarillo from "@/assets/robotAmarilloCompleto.svg"
import { loginUser} from '../../api/athApi'
import useStoreCompras from '@/contexts/PlanesPagoStore'
const LoginView = () => {
    const navigate = useNavigate()
    const initialValues: UserLoginForm = {
        email: "",
        password: "",
        
    }
    const {getPlanPago} = useStoreCompras()
    const { register, handleSubmit, formState: { errors } } = useForm<UserLoginForm>({ defaultValues: initialValues })
    
     
       const {mutate} = useMutation({
        mutationFn:loginUser,
        onError:(e:Error)=>{
            toast.error(e.message)
        },
        onSuccess:(data)=>{
            const pago=getPlanPago()
           // console.log(pago)
            if(data === "estudiante"){
               return navigate("/alumno/inicio")
            } 
            if(pago && data==='instructor'){
                return navigate("/instructor/planes-pago")
            }
            navigate("/instructor/inicio")
           
        }
    })
    const submit = (data: UserLoginForm) => {
        mutate(data)
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
          <div className=" flex contenedor-login-aida h-screen justify-center flex-col w-full">
                <h3 className=' text-white text-3xl px-36 text-center   font-bold '> Veo que estas interesado en nosotros, <br /> adelante aprende, crea y mejora</h3>
                <form onSubmit={handleSubmit(submit, onError)} className="bg-white mx-auto anchura-formulario">
                    <div className='flex justify-center contenedor-botones'>
                        <button onClick={() => navigate('/auth/login')}
                            className='w-1/2 text-center py-5 flex justify-center '>
                            <span className='text-semibold text-xl text-slate-400 font-inter'>
                                Inicio de sesion
                            </span>
                            <img src={enter} className='ml-3 w-8' alt="Icono de entrar" />
                        </button>
                        <button onClick={() => navigate('/auth/register')} className='w-1/2 text-center py-5 flex justify-center color-fondo-login-select' >
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
                        <div className='bg-gray-100 rounded-xl p-2 flex shadow-md items-center justify-center h-full'>
                            <UserIcon className='w-8 text-slate-500' />
                            <input  {...register("email", {
                                required: "El email es requerido",
                            })}
                                type="email" placeholder='Email del usuario'
                                className="block w-full border-none p-2 border border-gray-300 rounded placeholder:font-semibold bg-gray-100" />
                        </div>
                        <div className='bg-gray-100 rounded-xl p-2 flex shadow-md items-center justify-center h-full'>
                            <LockClosedIcon className='w-8 text-slate-500' />
                            <input
                                {...register("password", {
                                    required: "El password es requerido",
                                })}
                                type="password" placeholder='Contraseña del usuario'
                                className="block w-full border-none p-2 border border-gray-300 rounded placeholder:font-semibold bg-gray-100" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <input type="submit" value={"Iniciar sesion"}
                            className='bg-azul-rebajado-fondo rounded-full font-bold p-2 px-10 py-3  
                                 text-xl text-white hover:bg-azul-rebajado-hover duration-100
                                 cursor-pointer transition-colors' />
                    </div>
                    <div className='flex justify-center my-5'>
                        <Link to="/auth/register" className='text-center w-full jos-font-600'>¿Aun no tienes una cuenta? </Link>
                        <Link to="#" className='text-center w-full jos-font-600'>Reestablecer contraseña</Link>
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

export default LoginView