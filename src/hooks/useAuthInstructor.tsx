import { useQuery } from "react-query"
import { getUserWithEmail } from "@/api/userApi"
/*
Este sera un hook para tener de forma global la informacion del instructor
la diea ees que aqui se vallana gregando mas funciones a como se valla necesitando
*/

const useAuthInstructor = () => {
    const {data:informacionGeneral,isSuccess} = useQuery({
        queryFn: getUserWithEmail,
        queryKey: 'instructorUser'
      })
    // console.log(informacionGeneral)

      console.log("desde el hook"+informacionGeneral)
        return {
          isSuccess,
          instructor:informacionGeneral?.instructor,
          codigos:informacionGeneral?.codigos,
          cursos:informacionGeneral?.cursos,
          tareas:informacionGeneral?.tareas

    }
    
}
export default useAuthInstructor
