import axiosCli from "../config/axiosCli";
import { isAxiosError } from "axios";

//funcion para generar el codigo de union
//se requiere el id del curso
//el id del instructor se manda via token
export async function generarCodigoUnion(id_course:string){
    try{
        //http://localhost:3000/api/instructor/instructors/unionCode/67041ccf5ebfd796cb6ebdc3
        const res = await axiosCli.post(`/instructor/instructors/unionCode/${id_course}`)
        console.log(res.data)
        return res.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
}
export async function getCoursesByInstructor(){
    try{
console.log("entrando en peticion")
       // http://localhost:3000/api/instructor/instructorr/getCourses
        //http://localhost:3000/api/instructor/instructors/unionCode/67041ccf5ebfd796cb6ebdc3
        const res = await axiosCli.get(`/instructor/instructor/getCourses`)
        console.log(res.data)
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
}