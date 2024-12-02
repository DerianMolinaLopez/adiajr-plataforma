import { cursosTipos } from "@/helpers/diferenciacionTipos";
import conversionFecha from "@/helpers/conversionFecha";

type CardTareasProps = {
  _id: string;
  title: string;
  description: string;
  course: {
    _id: string;
    name: string;
    tipoCurso: string;
  };
  endDate: string;
};

export const CardTareas = ({ _id, title, description, course, endDate }: CardTareasProps) => {
  const imagen = cursosTipos[course.tipoCurso]; // Marca un error por el tipo de dato que regresa pero todo está bien, es el any que está usando

  return (
    <article key={course._id} className="bg-white rounded-lg flex flex-col justify-between min-h-full">
      <div className="flex justify-center gap-2 px-1 shadow-sm">
        <div className="flex items-center">
          <img src={imagen} alt="imagen-del-curso" />
        </div>
        <div>
          <h3 className="font-bold text-2xl">{title}</h3>
          <p className="text-xl">{description}</p>
          <p>
            Pertenece al curso:{' '}
            <span>
              {course.name}
            </span>
          </p>
          <p className="text-red-600">Fecha límite: {conversionFecha(endDate)}</p>
        </div>
      </div>
      <div className="mt-auto">
        <button className="bg-emerald-600 text-white font-bold w-full py-2 rounded-lg mt-2">Ver asignación</button>
      </div>
    </article>
  );
};

export default CardTareas;