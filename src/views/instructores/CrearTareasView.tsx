import useAuthInstructor from "@/hooks/useAuthInstructor";
import cajaVacia from "@/assets/img/4826310.png";
import { CardCursoCreacionTarea } from "@/components/Instructor/creacionTareas/CardCursoCreacionTarea";

export const CrearTareasView = () => {
  const { cursos } = useAuthInstructor();
  console.log(cursos);

  return (
    <div className="px-20">
      <h2 className="my-10 text-4xl font-bold">Selecciona el curso al cual quieres asignarle una tarea.</h2>
      {cursos && cursos.length > 0 ? (
        <section className="grid  overflow-auto lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 p-2 rounded-lg altura-grupos-tareas gap-5">
          {cursos.map(curso => (
            <CardCursoCreacionTarea
              courseId={curso._id}
              key={curso._id}
              tipoCurso={curso.tipoCurso}
              name={curso.name}
              description={curso.description}
            />
          ))}
        </section>
      ) : (
        <div className="text-center">
          <img src={cajaVacia} alt="Caja vacía" className="w-48 mx-auto" />
          <p className="mt-4 text-xl font-black">No tienes ningún curso creado intenta creando uno y regresa.</p>
        </div>
      )}
    </div>
  );
};

export default CrearTareasView;