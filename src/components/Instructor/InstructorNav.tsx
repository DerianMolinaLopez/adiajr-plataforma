import { Link } from "react-router-dom"
import {HomeIcon,CreditCardIcon} from "@heroicons/react/20/solid"


const InstructorNav = () => {
    ///instructor/:id/inicio
  return (
    <nav className=" w-16 bg-azul-oscuro h-screen py-4 flex items-center space-y-4 flex-col">
        <Link to="" className={` text-white ` }>
          <HomeIcon className="w-10"/>
          
        </Link>
        <Link to={"/instructor/planes-pago"} className="">
           <CreditCardIcon className="w-10 text-indigo-600"></CreditCardIcon>
        </Link>
    </nav>
  )
}

export default InstructorNav
