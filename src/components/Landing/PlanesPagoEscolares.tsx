import { ModalConfirmarPago } from "../Pagos/pagosInstructor/ModalConfirmarPago";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useQuery } from "react-query";
import { getPeriodos } from "@/api/userApi";
import type {Periodo} from "@/types/index"

//!registrar el pago de un periodo
const planesPago = [
  {
    title: "Bimestral",
    price: "xxX/Bimestre",
    features: ["2 meses de acceso","Monitoreo de grupos","asignacion de tareas","5 grupos como maximo para gestionar","30 alumnos por grupo"],
    buttonText: "Comprar",
    buttonColor: "bg-gray-400",
    borderColor: "border-gray-300"
  },
  {
    title: "Trimestral",
    price: "$xxx/Trimestral",
    features: ["3 meses de acceso","Monitoreo de grupos","asignacion de tareas","10 grupos como maximo para gestionar","30 alumnos por grupo"],
    buttonText: "Comprar",
    buttonColor: "bg-blue-500",
    borderColor: "border-blue-500",
    popular: true
  },
  {
    title: "Semestral",
    price: "XXX/Semestral",
    features: ["6 meses de acceso","Monitoreo de grupos","asignacion de tareas","10 grupos como maximo para gestionar","30 alumnos por grupo","informes"],
    buttonText: "Comprar",
    buttonColor: "bg-gray-400",
    borderColor: "border-gray-300"
  },
  {
    title: "Anualidad",
    price: "XXX/Anualidad",
    features: ["12 meses de acceso","Monitoreo de grupos","asignacion de tareas","20 grupos como maximo para gestionar","50 alumnos por grupo","informes"],
    buttonText: "Comprar",
    buttonColor: "bg-gray-400",
    borderColor: "border-gray-300"
  }
];

const PlanesPagoEscolares = () => {
  const{data:periodos} = useQuery({
    queryKey: "periodos",
    queryFn: getPeriodos
  })
 
  
   if(periodos) return (
    <div className='gradiente-precio xl:h-screen bg-white'>

      <div className=" ">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-3xl  title-font mb-2  text-white font-black">
                Planes de pago para que puedas administrar tus grupos y tus alumnos
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-100">
              El Tiempo para cancelar la compra es al menosd e 3 dias, de lo contrario ya no podras cancelar la compra <br />
              si tienes mas dudas acerca de nuestras politicas, has <a href="#" className='font-bold text-white'>click aqui.</a>
              </p>
              
            </div>
            <div className="flex flex-wrap -m-4">
              {periodos.map(periodo=><Card key={periodo._id} Periodo={periodo}></Card>)}
            </div>
          </div>
        </section>
      
      </div>
    
    </div>
  );
};

export default PlanesPagoEscolares;


type CardProps = {
    Periodo:Periodo;
  };
  
  const Card = ({Periodo}:CardProps) => {
    console.log(Periodo)
    return (
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className={`h-full p-6 rounded-lg bg-white shadow-lg border-2 flex flex-col relative overflow-hidden`}>
          <h2 className="tracking-widest title-font mb-1 font-medium text-2xl">{Periodo.name} / periodo</h2>
          <h1 className="text-3xl  text-gray-900 leading-none flex  pb-4 mb-4 border-b border-gray-200">
            <span>{Periodo.price}$</span>
          </h1>
          <ul className="list-none space-y-5 border-b border-b-gray-200 pb-5 mb-5">
            <div className="flex ">
              <CheckCircleIcon width={20} className="text-green-500"></CheckCircleIcon><li className="text-slate-600">{Periodo.description1}</li>
            </div>
            <div className="flex">
            <CheckCircleIcon width={20} className="text-green-500"></CheckCircleIcon>
              <li className="text-slate-600">{Periodo.description2}</li>
            </div>
            <div className="flex">
            <CheckCircleIcon width={20} className="text-green-500"></CheckCircleIcon>
            <li className="text-slate-600">{Periodo.gruposMaximos} numero maximo de grupos</li>
            </div>
            <div className="flex">
            <CheckCircleIcon width={20} className="text-green-500"></CheckCircleIcon>
            <li className="text-slate-600">{Periodo.maximoAlumnos} numero maximo de grupos</li>
            </div>
            
            
          </ul>
          <ModalConfirmarPago periodo={Periodo._id} tittle={Periodo.name} price={String( Periodo.price)} />
         {/**<ModalConfirmarPago tittle={Periodo.name} price={String( Periodo.price)} /> 
          * 
          *   tittle: string;
  price: string;
  buttonColor: string;
  buttonText: string;
};
          * 
         */}
        </div>
        <div>
          
        </div>
        <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    
      </div>
    );
  };
  