import {  useMutation} from "react-query"
import { searchWithUnionCode } from "@/api/userApi"
import { useState } from "react"
import{ toast} from "react-toastify"
import { useNavigate } from "react-router-dom"
const InputBusqueda = () => {
  const navigate = useNavigate()
  const [codigoUnion,setCodigoUnion] = useState<string>("")
  const {mutate} = useMutation(
    {
      mutationFn: searchWithUnionCode,
      onError: () => {
        navigate("/alumno/codigo-union-error")
      }, //manejaremos un error, si no se encuentra ese codigo de union, lo enviaremos a la pagina de error
      onSuccess: (data) => {
        console.log(data)
    } //si encuentrael curos, lo mandaremos a la pagina donde se muestre el card de ese curso encotnrado
    }
  )
  const handleEnviar =()=>{
     console.log("enviadno codigo")
      if(codigoUnion.trim() ===""){
      return   toast.error("No puedes ingresar el codigo vacio")
      }
      mutate(codigoUnion)

  }
  return (
    <div className=" mt-10 px-20">
        <h3 className="font-bold text-2xl ">¿Tienes algun codigo de instructor? <br />
        ingresalo para poder unirte</h3>
        <input type="text" 
        value={codigoUnion}
        onChange={(e)=>setCodigoUnion(e.target.value)}
        placeholder="Codigo de union ejemplo: CS73jDzzs"
        className="rounded-full border border-slate-700 mt-3 mr-5
        input-codigo px-3 placeholder:text-slate-400 font-bold" name="" id="" />
        <button className="bg-lime-600 font-bold p-3 rounded-lg 
                          text-xl text-white border-b-4 border-b-lime-800
                          hover:bg-lime-700 hover:border-lime-900
                          duration-125 ease-in-out mt-3 
                          "
               onClick={handleEnviar}           >
            Buscar
        </button>
      
    </div>
  )
}

export default InputBusqueda
