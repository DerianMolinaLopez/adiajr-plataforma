import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ConfirmacionCompra } from '@/types/index';
import { toast, ToastContainer } from 'react-toastify';
import { useMutation } from 'react-query';
import { loginUserPayment } from '@/api/athApi';
import 'react-toastify/dist/ReactToastify.css';

type ModalConfirmarPagoProps = {
  tittle: string;
  price: string;
  buttonColor: string;
  buttonText: string;
};

export const ModalConfirmarPago = ({ tittle, price, buttonColor, buttonText }: ModalConfirmarPagoProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelctOption] = useState(false);
  const navigate = useNavigate();

  const initialValues: ConfirmacionCompra = {
    password: "",
    securityNumbers: "",
    numberCard: "",
    email: "",
    tittle: "",
    price: ""
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
    onSuccess: (data) => {
      toast.success("Hemos enviado un email con el recibo de tu pago");
      setTimeout(() => setIsOpen(false), 2500);
    }
  });

  const handleConfirmarCompra = (data: ConfirmacionCompra) => {
    data.tittle = tittle
    data.price = price.replace("$", "").split("/")[0]
    console.log(data.price)
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
        className={`flex items-center mt-auto text-white ${buttonColor} border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded`}
      >
        {buttonText}
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
          <DialogPanel className="max-w-lg space-y-4 bg-white p-12">
            <DialogTitle className="font-bold text-slate-600 text-2xl">Plan {tittle}</DialogTitle>
            <Description>Precio: {price}</Description>
            <p>¿Ya cuentas con una cuenta de AIDAjr?</p>
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
                    type="email" placeholder="Correo electronico" className='bg-gray-100 w-full placeholder:font-bold placeholder:text-black py-1' />
                  <input {...register('password', { required: "Es necesario que ingreses tu contraseña" })}
                    type="password" placeholder="Contraseña" className='bg-gray-100 w-full placeholder:font-bold placeholder:text-black py-1' />
                  <input {...register('numberCard', { required: "Es necesario que ingreses tu numero de tarjeta" })}
                    type="text" placeholder="Numero de la tarjeta" className='bg-gray-100 w-full placeholder:font-bold placeholder:text-black py-1' />
                  <input {...register('securityNumbers', { required: "Es necesario que ingreses tus numeros de seguridad" })}
                    type="password" placeholder="Numeros de seguridad" className='bg-gray-100 w-full placeholder:font-bold placeholder:text-black py-1' />
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