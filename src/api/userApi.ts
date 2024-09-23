import axiosCli from "../config/axiosCli";
import { UserSchema,CourseViewSchema,cursoShortArraySchema,cursoDetailSchemaArray  } from "../types";
import { isAxiosError } from "axios";
export  async function getUser () {
    try{
        const res = await axiosCli("/user/student")
        const rest = UserSchema.safeParse(res.data.estudiante)

        //console.log(rest.data)
        return rest.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}
export  async function getNewCourses () {
    try{
        const res = await axiosCli("/courses/courses/top")
        const rest = CourseViewSchema.safeParse(res.data.estudiante)

        //console.log(rest.data)
        return rest.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}

//obtener los primeros 3 cursos del usuario
//*/api/user/student/courses
export  async function getTopCourses () {
    try{
        const res = await axiosCli("/user/student/courses")
        const rest = cursoShortArraySchema.safeParse(res.data.cursos)
      //  console.log(rest.data)
      //  console.log(rest.data)
        return rest.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}
//http://localhost:3000/api/user/student/courses/type/word

export  async function getTypeCourses (tipo:string) {
    try{
       const res = await axiosCli(`/user/student/courses/type/${tipo}`)
       const rest = cursoDetailSchemaArray .safeParse(res.data.cursos)

        return rest.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}