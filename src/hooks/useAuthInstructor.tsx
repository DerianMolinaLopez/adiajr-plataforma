import { useQuery } from "react-query"
import { getUserWithEmail } from "@/api/userApi"
/*
Este sera un hook para tener de forma global la informacion del instructor
la diea ees que aqui se vallana gregando mas funciones a como se valla necesitando
*/

const useAuthInstructor = () => {
    const {data:informacionGeneral} = useQuery({
        queryFn: getUserWithEmail,
        queryKey: 'instructorUser'
      })

      
      
        return {
          usuario:informacionGeneral?.usuario,
          cursosInstructor:informacionGeneral?.cursos,
          codigosUnion:informacionGeneral?.cursosConCodigoUnion,
          cursos:informacionGeneral?.cursos//este es para la ventana modal para crear un codigo de union, isn embargo hay que mostrar informacion
    }
    
}
export default useAuthInstructor
