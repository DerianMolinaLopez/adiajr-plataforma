import { getCourseByStudent, getTareas } from "@/api/userApi";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { TareasCard } from "@/components/Alumno/Tareas/TareasCard";

export const Tareas = () => {
  const [idCursos, setIdCursos] = useState<string[]>([]);

  const { data: cursos, isLoading: isLoadingCursos, error: errorCursos } = useQuery({
    queryFn: getCourseByStudent,
    queryKey: 'cursos-estudiante',
  });

  useEffect(() => {
    if (cursos && cursos.length > 0) {
      setIdCursos(cursos.map((curso: { _id: string }) => curso._id));
    }
  }, [cursos]);

  const { data: tareas, isLoading: isLoadingTareas, error: errorTareas } = useQuery({
    queryFn: () => getTareas(idCursos),
    queryKey: 'tareas-estudiante',
    enabled: idCursos.length > 0, // Habilitar la consulta solo cuando `idCursos` tenga datos
  });

  if (isLoadingCursos || isLoadingTareas) return <div>Cargando...</div>;
  if (errorCursos || errorTareas) return <div>Ocurrió un error</div>;
   console.log(tareas)
  return (
    <>
    
      <div className="pt-20"></div>
      <h2 className="text-4xl font-bold mb-5">Tareas Asignadas recientemente</h2>
      {tareas?.length === 0 ? (
        <h1>No hay tareas</h1>
      ) : (
        <section className="grid grid-cols-3 gap-3 px-20">
         {tareas?.map((tarea) => <TareasCard tarea={tarea} />)}
        </section>
      )}
    </>
  );
};

export default Tareas;