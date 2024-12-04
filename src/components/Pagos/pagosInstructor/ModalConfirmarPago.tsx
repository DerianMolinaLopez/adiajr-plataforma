import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ConfirmacionCompra } from '@/types/index';
import { toast } from 'react-toastify';
import tarjetaCredito from "@/assets/img/Magnetic_Card.png"
import { useMutation } from 'react-query';
import { loginUserPayment } from '@/api/athApi';
import 'react-toastify/dist/ReactToastify.css';

type ModalConfirmarPagoProps = {
  periodo:string;
  tittle: string;
  price: string;

};

export const ModalConfirmarPago = ({ tittle, price,periodo }: ModalConfirmarPagoProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelctOption] = useState(false);
  const navigate = useNavigate();

  const initialValues: ConfirmacionCompra = {
    password: "",
    securityNumbers: "",
    numberCard: "",
    email: "",
    periodo:"",
  };

  const { register, handleSubmit} = useForm<ConfirmacionCompra>({ defaultValues: initialValues });

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelctOption(e.target.value === 'true');
  };

  const { mutate } = useMutation({
    mutationFn: loginUserPayment,
    mutationKey: "login-payment",
    onError: (e: Error) => {
      toast.error(e.message);
    },
    onSuccess: () => {
      toast.success("Hemos enviado un email con el recibo de tu pago");
      setTimeout(() => setIsOpen(false), 2500);
    }
  });

  const handleConfirmarCompra = (data: ConfirmacionCompra) => {
    data.periodo = periodo
    console.log(data)
    mutate(data);
  };

  const handleErrores = (data: any) => {
    console.log(data);
    Object.entries(data).forEach((value) => {
      toast.error(value[1].message);
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center mt-auto text-white  border-0 py-2 px-4 w-full focus:outline-none bg-azul-claro hover:bg-gray-500 rounded`}
      >
        {"Confirmar compra"}
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel */}
          <DialogPanel className="max-w-lg space-y-4 bg-white p-12 rounded-lg">
            <DialogPanel className={"border-b-2 border-b-slate-400"}>
            <DialogTitle className="font-bold text-slate-600 text-4xl">Plan {tittle}</DialogTitle>
            </DialogPanel>
            
            <Description>
              <span className='font-bold text-slate-600 text-xl'>Precio: </span>
              
              {price}</Description>
            <p className='text-center'>¿Ya cuentas con una cuenta de AIDAjr?</p>
            <article className="flex justify-around">
              <div className="flex">
                <p>Si</p>
                <input
                  type="radio"
                  value="true"
                  checked={selectOption === true}
                  onChange={handleOptionChange}
                />
              </div>
              <div className="flex">
                <p>No</p>
                <input
                  type="radio"
                  value="false"
                  checked={selectOption === false}
                  onChange={handleOptionChange}
                />
              </div>
            </article>
            {selectOption ? (
              <>
                <p>Ingresa tu cuenta y te enviaremos un email con el recibo de tu pago</p>
                <form action="" className='space-y-3' onSubmit={handleSubmit(handleConfirmarCompra, handleErrores)}>
                  <input {...register('email', { required: "Es necesario que ingreses el email" })}
                    type="email" placeholder="Correo electronico" className='bg-gray-100 rounded border-slate-300 border px-5  w-full placeholder:font-bold placeholder:text-black py-1' />
                  <input {...register('password', { required: "Es necesario que ingreses tu contraseña" })}
                    type="password" placeholder="Contraseña" className='bg-gray-100 rounded border-slate-300 border px-5  w-full  placeholder:font-bold placeholder:text-black py-1' />
                  
                  <div className='flex justify-center gap-4'>
                     <input {...register('numberCard', { required: "Es necesario que ingreses tu numero de tarjeta" })}
                    type="text" placeholder="Numero de la tarjeta" className='bg-gray-100 border-slate-300 border px-5 rounded w-full placeholder:font-bold placeholder:text-black py-1' />
                    <div >
                      <p className='text-sm text-slate-700'>Numeros de seguridad</p>
                      <div className='flex gap-2'>
                         <img src={tarjetaCredito} alt="icono-tarjeta" className='w-10' />
                         <input {...register('securityNumbers', { required: "Es necesario que ingreses tus numeros de seguridad" })}
                    type="password" className='bg-gray-100 border-slate-300 border px-5   w-full placeholder:font-bold placeholder:text-black py-1' />
            
                      </div>
                    
                    </div>
                  
                  </div>
                       <div className='flex justify-center'>
                    <button type='submit' className='mx-auto bg-blue-600 px-4 py-2 text-white font-semibold rounded'>Confirmar compra</button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate('/auth/login')}
                  className='px-2 py-3 rounded-md text-blue-800 font-bold'>
                  Da click aqui para crear una cuenta
                </button>
              </>
            )}
            <div className="flex gap-4">
              <button
                className='bg-red-500 text-white px-4 py-2 mx-auto rounded'
                onClick={() => setIsOpen(false)}>Cancelar compra</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      
    </>
  );
};

export default ModalConfirmarPago;