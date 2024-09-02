import {UserCircleIcon} from "@heroicons/react/20/solid"
import {Link} from "react-router-dom"
const Nav = () => {
  /*
  sm:h-60 md:h-20 lg:h-16
  */
  return (
    <div className="flex lg:flex-row   justify-around gap-10 items-center">
      <p>Sobre nosotros</p>
      <p>Planes de pago</p>
      <p>AidaJR para escuelas</p>
      <Link to={"/auth/login"}className={`flex flex-col text-white ` }>
          <UserCircleIcon className="w-10"/>
          
        </Link>
    </div>
  )
}

export default Nav
