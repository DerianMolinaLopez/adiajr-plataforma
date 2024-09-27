
import { Outlet } from "react-router-dom"
import NavegacionAlumno from "../components/Alumno/NavegacionAlumno"
const AlumnoLayout = () => {
  return (
    <>
     <header className="bg-azul-oscuro px-32 fixed w-full z-50 shadow-lg">
        
            <NavegacionAlumno></NavegacionAlumno>
        
        
    </header>
    <main className="bg-gris-rebajado-variante max-w-screen-2xl mx-auto">
            <Outlet></Outlet>
        </main>
    </>
   
  )
}

export default AlumnoLayout
