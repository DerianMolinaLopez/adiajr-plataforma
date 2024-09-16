
import Banner from '@/components/Alumno/banner'
import UltimosCursos from '@/components/Alumno/UltimosCursos'
import CursosNuevos from '@/components/Alumno/CursosNuevos'
const InicioView = () => {
    //1- Peticion para obtener los primeros 3 cursos del usuario
    //si no tiene cursos que muestre un mensaje de que no hay 
  return (
    <>
    <Banner />
    <UltimosCursos />
    <CursosNuevos />
    </>
  )
}

export default InicioView
