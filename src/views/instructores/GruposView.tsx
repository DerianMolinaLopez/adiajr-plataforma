import useAuthInstructor from "@/hooks/useAuthInstructor"
import CursosCard from "@/components/Alumno/cursos/CursosCard"
import CardCurso from "./CardCursos"
export const GruposView = () => {
    const {usuario,cursos} = useAuthInstructor()


  if(usuario)  return (
    <div className="px-20 ml-10 space-y-4">
    <h2 className="text-4xl  mt-10 font-bold">Hola bienvenido - {usuario?.name}</h2>
    <h3 className="text-2xl   font-normal">Estos son tus grupos creadoos</h3>
    <button className=" text-white bg-emerald-600 border-b-4 border-b-emerald-800 rounded-xl p-2">Crear nuevo grupo</button>
    <input type="text" placeholder="Ingresa el nombre del grupo" className="block mt-4 p-2 w-72 rounded border-2 border-slate-400 shadow-sm" />
     <div className="grid grid-cols-4">
      {cursos?.map((curso) => <CardCurso name={curso.name} 
                                               instructor={usuario.name}
                                               tipoCurso={curso.tipoCurso} key={curso._id} />)}
     </div>
</div>
  )
}
