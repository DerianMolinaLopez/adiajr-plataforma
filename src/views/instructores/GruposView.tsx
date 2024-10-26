import useAuthInstructor from "@/hooks/useAuthInstructor"

export const GruposView = () => {
    const {usuario} = useAuthInstructor()
    console.log(usuario)
    console.log("aaa")
  
  if(usuario)  return (
    <div className="px-20 ml-10 space-y-4">
    <h2 className="text-4xl  mt-10 font-bold">Hola bienvenido - {usuario?.name}</h2>
    <h3 className="text-2xl   font-normal">Estos son tus grupos creadoos</h3>
    <button className=" text-white bg-emerald-600 border-b-4 border-b-emerald-800 rounded-xl p-2">Crear nuevo grupo</button>
    <input type="text" placeholder="Ingresa el nombre del grupo" className="block mt-4 p-2 w-72 rounded border-2 border-slate-400 shadow-sm" />
</div>
  )
}
