import { useQuery } from "react-query";
import { getCourseById ,getSectionsByCourse} from "@/api/userApi";
import { useLocation } from "react-router-dom";
import DetalleCursoPagos from "@/components/Alumno/pagos/DetalleCursoPagos";
import RecomendacionCurso from "@/components/Alumno/pagos/RecomendacionCurso";
import SeccionesCurso from "@/components/Alumno/pagos/SeccionesCurso";
const PagosCursosView = () => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const id = queryParam.get("idcurso")!;
  const idInstructor = queryParam.get("instructorID")!;

  const { data: cursosDatos, isLoading, isSuccess } = useQuery({
    queryFn: () => getCourseById(id),
    queryKey: ['curso', id],
    enabled: !!id,
  });

  const {data:seccionesCurso} = useQuery({
    queryFn: () => getSectionsByCourse(id),
    queryKey: ['secciones', id],
    enabled: !!id,
  })

 

  if (isLoading) return <div>Loading...</div>;

  if (isSuccess) console.log("bien");



  if(cursosDatos && seccionesCurso)return (
    <div className="pt-20">
      <DetalleCursoPagos curso={cursosDatos } idCurso={id} SeccioensCurso={seccionesCurso.sections} idInstructor={idInstructor} />
      <h3 className="my-5 text-3xl font-semibold px-20">Secciones que incluye el curso</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <SeccionesCurso secciones={seccionesCurso.sections} />
          <RecomendacionCurso excepcion={cursosDatos._id} tipoCurso={cursosDatos.tipoCurso}/>
      </div>
      
      
    </div>
  );
};

export default PagosCursosView;