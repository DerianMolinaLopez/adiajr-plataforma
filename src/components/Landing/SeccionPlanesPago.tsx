

import CardSeccionInvertida from "./CardSeccionInvertida"
import { CardsInvertidas } from "../../types"
import childs from "../../assets/childs.svg"
import billetera from '@/assets/billetera.svg'
const planesPago:CardsInvertidas[]= [
    {
      title: "Ahorra el esfuerzo de gestionar grupos, nosotros te ayudamos",
      description: "Escuelas y maestros, Este plan es una alternativa comoda, segura y precisa, acceso mensual, bimestral, trimestral, semestral y nuestro plan anual.",
      img: childs,
      color: "bg-emerald-600", url: "/pago/escolares"
    },
    {
      title: "Plan personalizado",
      description: "Paga por el numero de meses o semanas en las que va a trabajar y el numero de alumnos que quieres tener",
      img: billetera,
      color: "bg-rosa-rojiso",
      url: "/pago/personalizado",
      
      invertido:true
    },
    
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
/*

 <h3 className="text-slate-600 font-bold text-center text-3xl sm:text-4xl lg:text-6xl my-32">Planes de pago</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10">
          
          {planesPago.map((card,index)=><CardSeccionInvertida
            key={index}
                                                               card={card}  />)}
          </div>

*/