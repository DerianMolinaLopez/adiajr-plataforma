
import Banner from '@/components/Alumno/banner'
import UltimosCursos from '@/components/Alumno/UltimosCursos'
import TiposCursosSeccion from '@/components/Alumno/TiposCursosSeccion'
import CursosNuevos from '@/components/Alumno/CursosNuevos'
import InputBusqueda from '@/components/Alumno/InputBusqueda'
import { Tarjetita } from '@/components/Alumno/Tarjetita'

const InicioView = () => {
  

  return (
    <>
    <Banner />
    <InputBusqueda />
    <UltimosCursos />
    <CursosNuevos />
    <Tarjetita color='bg-red-600'>
      Cursos mas vendidos
    </Tarjetita>
    <TiposCursosSeccion tipo='word' titulo='Inicia tu aprendizaje con Word'/>
    <TiposCursosSeccion tipo='excel' titulo='Automatiza algunas de tus tareas con Excel'/>
    <Tarjetita color='bg-orange-600'>
      Nueva integracion
    </Tarjetita>
    <TiposCursosSeccion tipo='power' titulo='Presentaciones lindas y bonitas'/>
  
    </>
  )
}

export default InicioView
