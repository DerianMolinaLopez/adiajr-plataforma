

import CardSeccionInvertida from "./CardSeccionInvertida"
import { CardsInvertidas } from "../../types"
import childs from "../../assets/childs.svg"

const planesPago:CardsInvertidas[]= [
    {
      title: "Ahorra el esfuerzo de gestionar grupos, nosotros te ayudamos",
      description: "Escuelas y maestros, Este plan es una alternativa comoda, segura y precisa, acceso mensual, bimestral, trimestral, semestral y nuestro plan anual.",
      img: childs,
      color: "bg-emerald-600", url: "/pago/escolares"
    }
    
  ]
const SeccionPlanesPago = () => {
  return (
    <div>
      <h3 className=" font-bold text-center text-3xl sm:text-4xl lg:text-6xl my-32 text-white bg-blue-950 py-10 rounded-lg">Explora nustros planes</h3>
        <div className="flex justify-center ">
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