import { useQuery } from "react-query";
import { getCourseById ,getSectionsByCourse} from "@/api/userApi";
import { useLocation } from "react-router-dom";
import DetalleCursoPagos from "@/components/Alumno/pagos/DetalleCursoPagos";
import SeccionesCurso from "@/components/Alumno/pagos/SeccionesCurso";
const PagosCursosView = () => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const id = queryParam.get("idcurso")!;

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
      <DetalleCursoPagos curso={cursosDatos } />
      <h3 className="my-5 text-3xl font-semibold px-20">Secciones que incluye el curso</h3>
      <SeccionesCurso secciones={seccionesCurso.sections} />
      
    </div>
  );
};

export default PagosCursosView;