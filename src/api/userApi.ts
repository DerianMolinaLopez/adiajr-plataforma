import axiosCli from "../config/axiosCli";
import { UserSchema } from "../types";
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