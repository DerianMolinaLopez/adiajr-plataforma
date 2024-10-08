import { useState, useEffect } from "react";
import { CursoShortPay } from "@/types/index";
import { cursosTipos } from "@/helpers/diferenciacionTipos";
import { formatearPrecios } from "@/helpers/formatearPrecios";
import ConfirmarCompraCurso from "./ConfirmarCompraCurso";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import useStateUser from "@/contexts/usuarioStore";
type DetalleCursoPagoProps = {
  curso: CursoShortPay;
};

const DetalleCursoPagos = ({ curso }: DetalleCursoPagoProps) => {
  const [cursoImagen, setCursoImagen] = useState<string | null>(null);
  const [cursoAida, setCursoAida] = useState<string | null>(null);

  const {setCurso,setInstructor,setCosto} = useStateUser ()
  const navigate = useNavigate(); 
  useEffect(() => {
    if (curso) {
      //@ts-ignore
      setCursoImagen(cursosTipos[curso.tipoCurso] || null);
      if(curso){
        setCurso(curso.name)
        setInstructor(curso.instructorName)
        setCosto("120")
      }
    }
  }, [curso]);

  return (
    <div>
      <div className="flex justify-around">
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
                Numero de secciones:xxxx
              </p>
              <p className="text-slate-600 font-bold text-2xl">
                Numero de horas de estudio estimadas:xxxx
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
            <p>{formatearPrecios(120)}MXN</p>
          </div>
          <div className="flex justify-between px-2 border-b-2 mt-3">
            <p>IVA</p>
            <p>{formatearPrecios(22)}MXN</p>
          </div>
          <div className="flex justify-between px-2 mt-3">
            <p>Total a pagar</p>
            <p>{formatearPrecios(22)}MXN</p>
          </div>
          <div className="flex justify-center flex-col mt-5">
            <ConfirmarCompraCurso />
          
          <button 
          onClick={()=>navigate(-1) /*regresamos a la url anterior */}
          className="bg-red-600 mt-5 hover:bg-red-700 font-semibold text-white text-xl p-2 rounded-lg">
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