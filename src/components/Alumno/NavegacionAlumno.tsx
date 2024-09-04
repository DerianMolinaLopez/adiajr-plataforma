import { Link } from "react-router-dom"
import logo from "@/assets/img/logooAIDA.png"
import {UserCircleIcon} from "@heroicons/react/20/solid"
type urlTI = {
    label:string | React.ReactNode,
    url:string
}
const url:urlTI[] = [
    {
        label:"inicio",
        url:"/alumno/inicio"
    },
    {
        label:"Grupos",
        url:"/alumno/grupos"
    },
    {
        label:"Canjear codigo",
        url:"/alumno/codigo"
    },
    {
        label:"Tareas",
        url:"/alumno/tareas"
    }
    ,
    {
        label:"Mis cursos",
        url:"/alumno/cursos"
    } ,
    {
        label:<UserCircleIcon className="w-10"/>,
        url:"/alumno/perfil"
    } 
]
 

const NavegacionAlumno = () => {
  return (
    <div className=" flex justify-between">
        <picture className="flex justify-between items-center">
        <img className="w-16" src={logo} alt="Logo de la organizacion" />
      </picture>
        <nav className="flex flex-row text-white gap-10 items-center">
          {url.map((item,index)=><Link 
                                 key={index} to={item.url}
                                 className={`hover:bg-azul-claro rounded-lg px-2 py-1
                                             transition-colors duration-100 ease-in-out w-32 text-centeru
                                             ${item.url === window.location.pathname ? "bg-azul-claro" : "bg-azul-oscuro"}
                                             `}
                                 >{item.label}</Link>)}
       </nav>
    </div>
    
  )
}

export default NavegacionAlumno
