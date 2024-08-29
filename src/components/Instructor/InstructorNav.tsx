import { Link } from "react-router-dom"
import {HomeIcon} from "@heroicons/react/20/solid"


const InstructorNav = () => {
    ///instructor/:id/inicio
  return (
    <nav className=" w-16 bg-azul-oscuro h-screen flex justify-center py-4">
        <Link to="" className={`flex flex-col text-white ` }>
          <HomeIcon className="w-10"/>
          
        </Link>
    </nav>
  )
}

export default InstructorNav
