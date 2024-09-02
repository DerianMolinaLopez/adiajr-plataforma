import { isAxiosError } from "axios";
import axiosCli from "../config/axiosCli";
import { UserLoginForm, UserRegisterForm } from "../types";
export  async function registerUser (data: UserRegisterForm) {
    try{
        const res = await axiosCli.post("/auth/register",data)
        console.log(res)
        return res.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}
export  async function loginUser (data: UserLoginForm) {
    try{
        const res = await axiosCli.post("/auth/login",data)
        console.log(res.data.token)
        localStorage.setItem("token",res.data.token)
        return ""
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}