
import useAuthInstructor from "@/hooks/useAuthInstructor"
import { ContainerInfoGeneral } from "@/components/Instructor/inicio/ContainerInfoGeneral"
const InicioInstructorView = () => {
  const {usuario}= useAuthInstructor()

  if(usuario)return (
    <>
      <h1 className="text-4xl ml-10 mt-10 font-bold">Hola bienvenido {usuario?.name}</h1>
      <ContainerInfoGeneral/>
    </>
  )
}

export default InicioInstructorView
