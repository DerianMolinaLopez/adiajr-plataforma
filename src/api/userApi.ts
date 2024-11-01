import axiosCli from "../config/axiosCli";
import { UserSchema,CourseViewSchema,cursoShortArraySchema,
         cursoDetailSchemaArray,CursoDetail,
         courseShortSchema,SectionCursoSchema,cursoSchemaArray,
         EnvioConfirmarCursoPassword,
         UserInstructorSchemaSpecify
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

/*
"cursos": [
        {
            "_id": "67255d35be57551630769850",
            "name": "CUrsos basic222dedaeawcdfacv adcswswswv acvcv aac2wswsw",
            "description": "cursos de word",
            "instructor_Id": "670421bcf168e5fda8de9251",
            "course_students": [],
            "tipoCurso": "word",
            "valoration": 0,
            "sections": [],
            "start_date": "2024-11-01T22:59:01.938Z",
            "end_date": "2024-11-01T22:59:01.938Z",
            "__v": 0
        },
        {
            "_id": "67255d38be57551630769856",
            "name": "CUrsos basic222dedaeawcdfacacvcv aac2wswsw",
            "description": "cursos de word",
            "instructor_Id": "670421bcf168e5fda8de9251",
            "course_students": [],
            "tipoCurso": "word",
            "valoration": 0,
            "sections": [],
            "start_date": "2024-11-01T22:59:04.296Z",
            "end_date": "2024-11-01T22:59:04.296Z",
            "__v": 0
        },
        {
            "_id": "67255d3abe5755163076985c",
            "name": "CUrsos basic222dedaeawcdv aac2wswsw",
            "description": "cursos de word",
            "instructor_Id": "670421bcf168e5fda8de9251",
            "course_students": [],
            "tipoCurso": "word",
            "valoration": 0,
            "sections": [],
            "start_date": "2024-11-01T22:59:06.170Z",
            "end_date": "2024-11-01T22:59:06.170Z",
            "__v": 0
        },
        {
            "_id": "67255d3bbe57551630769862",
            "name": "CUrsos basic222dedaeawrfrfrcdv aac2wswsw",
            "description": "cursos de word",
            "instructor_Id": "670421bcf168e5fda8de9251",
            "course_students": [],
            "tipoCurso": "word",
            "valoration": 0,
            "sections": [],
            "start_date": "2024-11-01T22:59:07.960Z",
            "end_date": "2024-11-01T22:59:07.960Z",
            "__v": 0
        }
    ]
*/
export async function getUserWithEmail(){
    try{
        const res = await axiosCli(`/instructor/instructor`)
       console.log(res.data)
        const rest = UserInstructorSchemaSpecify.safeParse(res.data)
        
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
       console.log(tipo)
       const res = await axiosCli(`/user/student/courses/type/${tipo}`)
        console.log(res)
      const rest = cursoDetailSchemaArray.safeParse(res.data.cursos)
      console.log(rest)
       if(rest.error?.issues!=undefined){
        console.log(rest.error?.issues)
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

//metodo para la confirmacion del pago del curso
//en el back en realidad si lo agrega y manda una factura pero no se muestra
//la facutra que va en el body, se envia a mailtrap
export  async function addUserCourse(form:EnvioConfirmarCursoPassword  ) {
   ///user/student/agregar-curso
    console.log(form)
  
    try{

        const res = await axiosCli.post(`/user/student/agregar-curso`,form)
        console.log(res.data)
        console.log("enviado")
        return res.data
      //http://localhost:3000/api/user/student/courses
     //  const res = await axiosCli.post(`/user/student/agregar-curso`,form)
     //  const rest = cursoSchemaArray.safeParse(res.data.cursos)
      // console.log(rest.data)
      // return rest.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}


 export  async function searchWithUnionCode(unionCode:string) {
 //http://localhost:3000/api/user/student/course/unionCode/415495
     try{
        const res = await axiosCli(`/user/student/course/unionCode/${unionCode}`)
        console.log(res.data)
        return res.data
     }catch(e){
         console.log(e)
         if(isAxiosError(e)){
            return "error"
            
         
         }
     }
    
 }