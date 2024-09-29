import axiosCli from "../config/axiosCli";
import { UserSchema,CourseViewSchema,cursoShortArraySchema,
         cursoDetailSchemaArray,CursoDetail,
         cursoDetailSchema,courseShortSchema,SectionCursoSchema,
         User,
         cursosShortValorationSchema,
         cursoSchemaArray
        } from "../types";
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
      console.log("desde los cursos top")
      console.log(rest.data)
        return rest.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}
//http://localhost:3000/api/user/student/courses




//http://localhost:3000/api/user/student/courses/type/word

export  async function getTypeCourses (tipo:string) {
    try{
       // console.log("desde el endpoint"+tipo)
       const res = await axiosCli(`/user/student/courses/type/${tipo}`)
  
      const rest = cursoDetailSchemaArray.safeParse(res.data.cursos)
       //  console.log(res.data)
       if(rest.error?.issues!=undefined){
        return []
       }
        return rest.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}
export  async function getCourseById(id:CursoDetail["_id"]) {
    try{

       const res = await axiosCli(`/courses/course/${id}`)

         const instructorName:string = res.data.instructor_Id.user_Id.name
         //console.log(res.data)
       //  console.log(instructorName)
         const dataCourse={
            _id:res.data._id,
            name:res.data.name,
            description:res.data.description,
            instructorName,
            tipoCurso:res.data.tipoCurso,
          
         }
         const rest = courseShortSchema.safeParse(dataCourse)
        return rest.data
         
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}
///sections/sections/course/66f079cc58bf3753e9b84128
export  async function getSectionsByCourse(id:CursoDetail["_id"]) {//!error
    try{

       const res = await axiosCli(`/sections/sections/course/${id}`)
       const rest = SectionCursoSchema.safeParse(res.data)
       console.log(rest)
       return rest.data

    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}

export  async function getCourseByStudent() {
    try{
      //http://localhost:3000/api/user/student/courses
       const res = await axiosCli(`/user/student/courses/detail`)
       const rest = cursoSchemaArray.safeParse(res.data.cursos)
       console.log(rest.data)
       return rest.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}


