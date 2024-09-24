

const InputBusqueda = () => {
  return (
    <div className=" mt-10 px-20">
        <h3 className="font-bold text-2xl ">¿Tienes algun codigo de instructor? <br />
        ingresalo para poder unirte</h3>
        <input type="text" 
        placeholder="Codigo de union ejemplo: CS73jDzzs"
        className="rounded-full border border-slate-700 mt-3 mr-5
        input-codigo px-3 placeholder:text-slate-400 font-bold" name="" id="" />
        <button className="bg-lime-600 font-bold p-3 rounded-lg 
                          text-xl text-white border-b-4 border-b-lime-800
                          hover:bg-lime-700 hover:border-lime-900
                          duration-125 ease-in-out mt-3 
                          ">
            Buscar
        </button>
      
    </div>
  )
}

export default InputBusqueda
