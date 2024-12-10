import useAuthInstructor from "@/hooks/useAuthInstructor";
import cajaVacia from '@/assets/img/4826310.png';
import { useState, useEffect } from "react";
import ModalCrearGrupo from "@/components/Instructor/GrupoasView/ModalCrearGrupo";
import CardCurso from "./CardCursos";

export const GruposView = () => {
  const { instructor, cursos } = useAuthInstructor();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cursosInstructor, setCursosInstructor] = useState<any[]>([]);

  useEffect(() => {
    if (cursos && cursos.length > 0) {
      setCursosInstructor(cursos);
    }
  }, [cursos]);

  if (instructor && cursos) return (
    <div className="px-20 ml-10 space-y-4">
      <h2 className="text-4xl mt-10 font-bold">Hola bienvenido - {instructor?.name}</h2>
      <h3 className="text-2xl font-normal">Estos son tus grupos creados</h3>
      <button className="text-white bg-emerald-600 border-b-4 border-b-emerald-800 rounded-xl p-2"
        onClick={() => setIsOpen(true)}>Crear nuevo grupo</button>
         {cursosInstructor.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-auto altura-codigos-union gap-5">
          {cursosInstructor.map((curso) => (
            <CardCurso
              grupoId={curso._id}
              key={curso._id}
              name={curso.name}
              instructor={instructor.name}
              tipoCurso={curso.tipoCurso}
              description={curso.description}
            />
          ))}
        </div>
      ) : (
        <div className="mx-auto w-full">
          <img src={cajaVacia} alt="caja vacia" className="w-48 mx-auto" />
          <p className="text-center mt-4">Aun no has creado ningun curso</p>
        </div>
      )}
      <ModalCrearGrupo isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default GruposView;