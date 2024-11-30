
import useAuthInstructor from "@/hooks/useAuthInstructor"
import { ContainerInfoGeneral } from "@/components/Instructor/inicio/ContainerInfoGeneral"
import PlazoPagos from "@/enum/PlazonEnum"
import { ErrorPlazoPago } from "@/errors/errorInstructor/ErrorPlazoPago"
const InicioInstructorView = () => {
  const { isSuccess, instructor } = useAuthInstructor();
   console.log(instructor)
  if (isSuccess) {
    if (instructor?.plazoPago !== PlazoPagos.SIN_PLAZO) {
      return (
        <>
          <h1 className="text-4xl ml-10 mt-10 font-bold">Hola bienvenido {instructor?.name}</h1>
          <ContainerInfoGeneral />
        </>
      );
    } else {
      return <ErrorPlazoPago />;
    }
  }

  return null;
};


export default InicioInstructorView
