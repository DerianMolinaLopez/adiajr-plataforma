
import useAuthInstructor from "@/hooks/useAuthInstructor"
const InicioInstructorView = () => {
  const {informacionGeneral}= useAuthInstructor()

  if(informacionGeneral)return (
    <>
      <h1 className="text-4xl ml-10 mt-10 font-bold">Hola bienvenido {informacionGeneral.name}</h1>
      
    </>
  )
}

export default InicioInstructorView
