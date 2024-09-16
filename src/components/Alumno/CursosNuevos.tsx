import { useQuery } from "react-query"
import { getNewCourses } from "@/api/userApi"
const CursosNuevos = () => {
    const {data:cursosNuevos} = useQuery({
        queryKey: 'newCourses',
        queryFn: getNewCourses
    })
  return (
    <div>
      
    </div>
  )
}

export default CursosNuevos
