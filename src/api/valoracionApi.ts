import axiosCli from "../config/axiosCli";
import { isAxiosError } from "axios";
import { Valoracion } from "../types";
type FormatoRespuesta={
    msg:string
    status:string
}
export async function enviarValoracion (valoracion:Valoracion){
    try{
        console.log(valoracion)
        const res = await axiosCli.post<FormatoRespuesta>("/valoration/valorar",valoracion)
        console.log(res.data)
        return res.data

    }catch(e){
        console.log(e)
        if(isAxiosError(e)){

            throw new Error(e.response?.data.message )
        }
    }
}