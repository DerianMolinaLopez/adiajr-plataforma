import cajaVacia from "@/assets/img/caja-vacia.png"
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid"
export const CodigoUnionError = () => {
  return (
    <>
    <div className="pt-20"></div>
    <button className="bg-rosa-rojiso text-white font-bold p-2 rounded-lg flex gap-3 ">
      <ArrowLeftCircleIcon className="w-6" />
      Regresar
    </button>
      <div className="flex items-center max-h-screen flex-col pt-20">
      
      <h3 className="text-center font-bold text-3xl">Uy no se ha encontrado ningun  curso con el codigo, <br />verifica con tu maestro si el codigo es correcto</h3>
      <img src={cajaVacia}  className ="w-80 mt-10"alt="imagen-caja-vacia " />
    </div>
    </>
  
  )
}
