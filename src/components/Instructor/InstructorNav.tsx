import { Link } from "react-router-dom"
import {HomeIcon} from "@heroicons/react/20/solid"


const InstructorNav = () => {
    ///instructor/:id/inicio
  return (
    <nav className=" w-16 bg-azul-oscuro h-screen py-4 flex items-center space-y-4 flex-col">
        <Link to="/instructor/inicio" className={` text-white ` }>
          <HomeIcon className="w-10"/>
          
        </Link>
      
    </nav>
  )
}

export default InstructorNav
