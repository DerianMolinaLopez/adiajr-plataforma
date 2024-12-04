import { isAxiosError } from "axios";
import axiosCli from "../config/axiosCli";
import { CambioPassword, ConfirmacionCompra, UserLoginForm, UserRegisterForm } from "../types";
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
        return res.data.tipoUsuario
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}

/*
  {
    "password": "12345678",
    "securityNumbers": "123433",
    "numberCard": "52632735276352",
    "email": "derianmll@gmail.com",
    "tittle": "Bimestral",
    "price": "300"
  }
*/
export  async function loginUserPayment (data: ConfirmacionCompra) {
    try{
        console.log(data)
        const res = await axiosCli.post("/periodos/pagar-periodo",data)
        return res.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }else{
            //@ts-ignore
            throw new Error(e.message)
        }
    }
   
}

export async function requestPassword(email:string){
    try{

        const res = await axiosCli.post("/auth/forgot-password",{email})
        console.log(res.data)
        return res.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
}
export  async function chekToken (token:string) {
    try{
        console.log(token)
        const res = await axiosCli.post("/auth/check-token",{token})
        console.log(res.data)
        return res.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}
// /api/auth//change-password
export  async function changePassword (obj: CambioPassword) {
    try{

        const res = await axiosCli.post("/auth/change-password",obj)
        console.log(res.data)
        return res.data
    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
   
}