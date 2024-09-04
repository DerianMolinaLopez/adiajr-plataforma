import { CardPagos } from "../Landing/PlanesPagoEscolares";
import { formatearPrecios } from "@/helpers/formatearPrecios";

type CardProcesarPagoProps = {
    pago: CardPagos;
};

const CardProcesarPago = ({ pago }: CardProcesarPagoProps) => {
    const precioPorAlumno = 150; // Precio por alumno
    const precioPorMes = 100; // Precio por mes
    const costoPorGrupo = 500; // Costo adicional por grupo

    return (
        <form className="border border-gray-300 bg-white p-5 rounded-lg shadow-md">
          <div className="border-b border-b-gray-400">
          <h3 className="text-center text-4xl font-bold uppercase mb-4">{pago.nombre}</h3>
          </div>
            
            <p className="font-semibold text-3xl mb-4">Detalle</p>
            <div className="flex flex-col space-y-4 border-b border-b-gray-400 ">
                <div className="flex justify-between">
                    <p className="text-slate-600 font-semibold">Plazos de pago:</p>
                    <p className="text-blue-800 font-semibold">{formatearPrecios(pago.numeroMeses * precioPorMes)}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-slate-600 font-semibold">Cuota por cantidad de alumnos:</p>
                    <p className="text-blue-800 font-semibold">{formatearPrecios(pago.numeroAlumnos * precioPorAlumno)}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-slate-600 font-semibold">Cuota de cantidad de grupos:</p>
                    <p className="text-blue-800 font-semibold">{formatearPrecios(pago.numeroGrupos * costoPorGrupo)}</p>
                </div>
            </div>
            <p className="text-end text-blue-800 font-semibold">{formatearPrecios( pago.total)}</p>
            <button className="bg-azul-rebajado-hover w-full text-center  text-white font-semibold p-1 mt-4 rounded-lg
            hover:bg-azul-fondo 
            ">Realizar compra</button>
        </form>
    );
};

export default CardProcesarPago;
