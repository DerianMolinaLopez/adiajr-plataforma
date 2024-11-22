import { ModalConfirmarPago } from "../Pagos/pagosInstructor/ModalConfirmarPago";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

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
  return (
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
              {planesPago.map((plan, index) => (
                <Card key={index} {...plan} />
              ))}
            </div>
          </div>
        </section>
      
      </div>
    
    </div>
  );
};

export default PlanesPagoEscolares;


type CardProps = {
    title: string;
    price: string;
    features: string[];
    buttonText: string;
    buttonColor: string;
    borderColor: string;
    popular?: boolean;
  };
  
  const Card = ({ title, price, features, buttonText, buttonColor, borderColor, popular }:CardProps) => {
    return (
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className={`h-full p-6 rounded-lg bg-white shadow-lg border-2 ${borderColor} flex flex-col relative overflow-hidden`}>
          {popular && <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">El mas comprado</span>}
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{title}</h2>
          <h1 className="text-3xl  text-gray-900 leading-none flex  pb-4 mb-4 border-b border-gray-200">
            <span>{price}</span>
          </h1>
          {features.map((feature, index) => (
            <p key={index} className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>{feature}
            </p>
          ))}
          <ModalConfirmarPago tittle={title} price={price} buttonText={buttonText} buttonColor={buttonColor}/>

        

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
  
  
/*
    
    <main className="pt-28">
        <h2 className="text-center text-3xl font-semibold mb-32 bg-azul-claro p-3 text-yellow-400">Se un instuctor con nuestras opciones</h2>
        <div className="flex justify-around gap-24 mx-20">
                {pagos.map((pagos,index)=><CardPlanes key={index} pagos={pagos}/>)}
        </div>
       
    </main>
*/