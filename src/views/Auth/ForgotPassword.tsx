import logo from "@/assets/img/logooAIDA.png";
import { useMutation } from "react-query";
import { requestPassword } from "@/api/athApi";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { mutate } = useMutation({
    mutationKey: 'request-password',
    mutationFn: requestPassword,
    onSuccess: (data: string) => toast.success(data),
    onError: (error: Error) => toast.error(error.message)
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    if(email === '') return toast.error('El correo electrónico es requerido.');
    mutate(email);
  };

  return (
    <div className="bg-azul-sobrio h-screen flex flex-col items-center">
      <img src={logo} className="w-60" alt="Logo de aidajr" />
      <form onSubmit={handleSubmit} className="bg-white w-1/5 rounded-sm px-2 py-4">
        <h2 className="text-2xl font-bold text-slate-700">Ingresa tu correo electrónico.</h2>
        <div className="px-2 space-y-3 mt-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder={`Ejemplo: aida@gmail.com`}
            className="block w-3/4 placeholder:text-slate-400 placeholder:font-bold placeholder:px-2
                       border border-slate-400 rounded-lg p-2"
          />
          <input
            type="submit"
            value="Solicitar código"
            className="bg-azul-rebajado-fondo p-2 text-white font-semibold
                       cursor-pointer hover:bg-azul-rebajado-hover transition-colors duration-150"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;