import logo from "@/assets/img/logooAIDA.png";

export const ForgotPassword = () => {
  return (
    <div className="bg-azul-sobrio h-screen flex flex-col items-center">
        <img src={logo} className="w-60" alt="Logo de aidajr" />
        <form action="" className="bg-white  w-1/5 rounded-sm px-2 py-4"  >
        <h2 className="text-2xl font-bold text-slate-700">Ingresa tu correo electornico.</h2>
        <div className="px-2 space-y-3 mt-5">
        <input type="email" placeholder={`Ejemplo:${' '}aida@gmail.com `}
                className="block w-3/4 placeholder:text-slate-400 placeholder:font-bold placeholder:px-2
                             border-b border-amarillo-aida  p-2" />
        <input type="submit" value="Solicitar codigo" 
                className="bg-azul-rebajado-fondo p-2 text-white font-semibold
                           cursor-pointer hover:bg-azul-rebajado-hover transition-colors duration-150 "  />
        </div>
            
        </form>
    </div>
  )
}
