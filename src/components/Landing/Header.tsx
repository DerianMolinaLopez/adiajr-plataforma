import Nav from "./Nav"
import logo from "../../assets/img/logooAIDA.png"

const Header = () => {
  return (
    <header className="bg-azul-oscuro  sm:flex sm:justify-between  flex-wrap h-96 sm:h-60 md:h-20 lg:h-16 text-white font-semibold px-10 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <img className="w-10" src={logo} alt="Logo de la organizacion" />
      </div>
      <Nav />
    </header>
  )
}

export default Header