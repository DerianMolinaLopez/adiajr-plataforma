import { CardPagos } from "../Landing/PlanesPagoEscolares"
import { formatearPrecios } from "@/helpers/formatearPrecios"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import useStoreCompras from "@/contexts/PlanesPagoStore"
type CardPlanesProps = {
    pagos:CardPagos
} 
const CardPlanes = ({pagos}:CardPlanesProps) => {
    const navigate = useNavigate()
    const {setPlanPago } = useStoreCompras()
    const seleccionarPlan = () =>{
        setPlanPago(pagos)
        navigate("/auth/login")
    }
  return (
    <article className="border border-gray-400 w-1/3 bg-white shadow-lg rounded-lg">
      <div className="font-semibold text-center text-3xl border-b border-gray-400 my-2"><h2>{pagos.nombre}</h2></div>
      <div className="mt-8 text-center mb-7 mx-10">
         <p className="text-2xl text-center font-bold ">{  formatearPrecios( pagos.total)} <span className="text-slate-500">/plazo</span></p>
         <div className="space-y-3 mt-3 text-slate-500 text-xl px-10">
         <p>
            Crea hasta <span>{pagos.numeroGrupos}</span> grupos
         </p>
         <p>Monitorea tus tareas</p>
         <p>Numero maximo de estudianets por grupo:  <span className="text-black">{pagos.numeroAlumnos}</span>  </p>
         <button 
           onClick={seleccionarPlan}
         className="bg-azul-claro text-white p-1 rounded-md ">Iniciar sesion para pagar</button>
         </div>
         
      </div>
    </article>
  )
}

export default CardPlanes
