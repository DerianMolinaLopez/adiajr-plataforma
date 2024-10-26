
import useAuthInstructor from "@/hooks/useAuthInstructor"
import ModalCrearCodigoUnion from "@/components/Instructor/codigoUnion/ModalCrearCodigoUnion"
import { useState } from "react"
/**
 * El objetivo de esta cista, es mostrar todos los codigos de union generados
 * Se debed e mostrar como una lista desplegable, en el que diga el nombre del grupo
 * y aun lado el codigo de union,
 */

export const UnionCodeView = () => {
    const {usuario,codigosUnion} = useAuthInstructor()
    const [codgigosCursos,setCodigosCursos] = useState([])

  return (
    <div className="px-20 ml-10 space-y-4">
        <h2 className="text-4xl  mt-10 font-bold">Hola bienvenido - {usuario?.name}</h2>
        <h3 className="text-2xl   font-normal">estos son tus codigos de union generados</h3>
        <ModalCrearCodigoUnion/>
        <input type="text" placeholder="Ingresa el nombre del grupo" className="block mt-4 p-2 w-72 rounded border-2 border-slate-400 shadow-sm" />

        <section className="space-y-2">
            {codigosUnion?.map(codigos=>(
                <div key={codigos.codigo} className="flex gap-5 bg-white w-3/5 px-5  rounded-lg py-2">
                    <h2 className="font-bold text-3xl">{codigos.curso.name} {' '}</h2>
                    <p className="text-2xl">Codgio de union:{' '}{codigos.codigo}</p>
                    <button className=" text-white  bg-emerald-600 border-b-4 border-b-emerald-800 rounded-xl p-1">Ver grupo</button>
                </div>
            ))}
        </section>
    </div>
  )
}
