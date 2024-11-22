import { Link } from "react-router-dom"
export const ErrorPlazoPago = () => {
    console.log("error plazo")
  return (
    <div className="">
        <h3 className="px-20 font-black text-4xl mt-20 text-center text-indigo-700">OOps no tienes un plan de instructor asociado a tu cuenta</h3>
          <p className="text-center text-3xl">visita nuestra pagina de 
            <Link to="/pago/escolares" className="text-indigo-800 font-bold"> precios</Link>
             </p>
    </div>
  )
}
