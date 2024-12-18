import { CursoShortPay } from "@/types/index";
import { cursosTipos } from "@/helpers/diferenciacionTipos";
import { formatearPrecios } from "@/helpers/formatearPrecios";
import ConfirmarCompraCurso from "./ConfirmarCompraCurso";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import {Section} from "@/types/index"

type DetalleCursoPagoProps = {
  curso: CursoShortPay;
  idCurso:string
  idInstructor:string
  SeccioensCurso:Section[]
};

const DetalleCursoPagos = ({ curso,idCurso,idInstructor,SeccioensCurso }: DetalleCursoPagoProps) => {

  const navigate = useNavigate();
  const cursoImagen = cursosTipos[curso.tipoCurso];


  return (
    <div>
      <div className="lg:flex  lg:justify-around   md:space-y-10">
        <section className="w-1/2 bg-white shadow-xl rounded-lg p-3 flex flex-col space-y-5">
          <article className="flex justify-center">
            {cursoImagen && (
              <img
                src={cursoImagen}
                className="w-10/12"
                alt="Imagen del tipo del curso"
              />
            )}
          </article>
          <article className="px-20">
            <p className="text-3xl font-black">{curso.name}</p>
            <p className="text-slate-600 font-bold text-2xl">
              {curso.instructorName}
            </p>
            <div>
              <p className="text-slate-600 font-bold text-2xl">
                Numero de secciones:{SeccioensCurso.length}
              </p>
            
            </div>
          </article>
        </section>
        <section className="w-1/4 bg-white shadow-xl rounded-lg py-2 px-5 text-2xl">
          <h3 className="text-center font-bold text-2xl border-b-2">
            {curso.name}
          </h3>
          <h4 className="font-semibold text-2xl">Detalle</h4>
          <div className="flex justify-between px-2 mt-3">
            <p>Costo del curso:</p>
            <p>{formatearPrecios(curso.costo)} MXN</p>
          </div>
          <div className="flex justify-center flex-col mt-5">
            <ConfirmarCompraCurso costo={curso.costo} idCurso={idCurso} idINstrcutor={idInstructor}  />
            <button
              onClick={() => navigate(-1) /*regresamos a la url anterior */}
              className="bg-red-600 mt-5 hover:bg-red-700 font-semibold text-white text-xl p-2 rounded-lg"
            >
              Cancelar compra
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DetalleCursoPagos;