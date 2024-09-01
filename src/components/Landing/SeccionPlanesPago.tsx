
import pagos  from "../../assets/pagos.svg"
import maestro from "../../assets/maestros.svg"
import CardSeccionInvertida from "./CardSeccionInvertida"
import { CardsInvertidas } from "../../types"
import childs from "../../assets/childs.svg"

const planesPago:CardsInvertidas[]= [
    {
      title: "Gestiona tu grupo escolar, y ahorrate el esfuezo",
      description: "Aprende con nosotros y se parte de la comunidad de AIDAjr",
      img: childs,
      color: "bg-emerald-600"
    },
    {
      title: "¿Eres un maestro free lancer? crea tus propiso grupos virtuales",
      description: "",
      img: pagos,
      color: "bg-slate-600",
      invertido:true
    },
    {
      title: "¿Eres una escuela? te ayudamos a asignar maestros a tus grupos",
      description: "",
      img: maestro,
      color: "bg-slate-600"
    }
    ,
    {
      title: "¿Eres una escuela? te ayudamos a asignar maestros a tus grupos",
      description: "",
      img: maestro,
      color: "bg-slate-600"
    }
  ]
const SeccionPlanesPago = () => {
  return (
    <div>
      <h3 className="text-slate-600 font-bold text-center text-3xl sm:text-4xl lg:text-6xl my-32">Planes de pago</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10">
          {/*title,description,img,invertido */}
          {planesPago.map((card,index)=><CardSeccionInvertida
          key={index}
                                                             card={card}  />)}
        </div>
    </div>
  )
}

export default SeccionPlanesPago
