
import Banner from '@/components/Alumno/banner'
import UltimosCursos from '@/components/Alumno/UltimosCursos'
import TiposCursosSeccion from '@/components/Alumno/TiposCursosSeccion'
import CursosNuevos from '@/components/Alumno/CursosNuevos'
import InputBusqueda from '@/components/Alumno/InputBusqueda'
import Footer from '@/components/Landing/Footer'
const InicioView = () => {
    //1- Peticion para obtener los primeros 3 cursos del usuario
    //si no tiene cursos que muestre un mensaje de que no hay 

  return (
    <>
    <Banner />
    <InputBusqueda />
    <UltimosCursos />
    <CursosNuevos />
    <TiposCursosSeccion tipo='word' titulo='Aprende la herramienta mas comun para oficinas Word'/>
    <TiposCursosSeccion tipo='excel' titulo='Aprende la herramienta mas comun para oficinas Word'/>
    <Footer />
    </>
  )
}

export default InicioView
