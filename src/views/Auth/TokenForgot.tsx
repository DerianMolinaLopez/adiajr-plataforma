import logo from "@/assets/img/logooAIDA.png";
import OTPInput from "@/components/auth/TokenInput";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { changePassword, chekToken } from "@/api/athApi";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { CambioPassword } from "@/types/index";

export const TokenForgot = () => {
  const [otp, setOtp] = useState(''); // !usar para useMutation
  const [tokenIsComplete, setTokenIsComplete] = useState(false);
  const [tokenIsValid, setTokenIsValid] = useState(false);
  const [email, setEmail] = useState(''); // Añadir estado para email
  const { mutate: checkTokenMutate } = useMutation({
    mutationKey: 'token-forgot',
    mutationFn: chekToken,
    onError: () => {
      toast.error("EL TOKEN NO EXISTE");
    },
    onSuccess: (data) => {
      toast.success('Token verificado exitosamente');
      setTokenIsValid(true);
      setEmail(data.email); // Asignar email desde la respuesta
    },
  });

  const { mutate: changePasswordMutate } = useMutation({
    mutationKey: 'change-password',
    mutationFn: changePassword,
    onSuccess: (data) => {
      toast.success(data);
    },
    onError: (error:Error) => {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (otp.length === 6) {
      setTokenIsComplete(true);
      console.log("antes del disparador");
      handleSubmit();
    }
  }, [otp]);

  const handleSubmit = () => {
    console.log("Ejecutando mutación con OTP:", otp);
    checkTokenMutate(otp);
  };

  return (
    <div className="bg-azul-sobrio h-screen flex flex-col items-center">
      <img src={logo} className="w-60" alt="Logo de aidajr" />
      {!tokenIsValid ? (
        <form action="" className="bg-white w-1/5 rounded-sm px-2 py-4">
          <h2 className="text-2xl font-bold text-slate-700">Ingresa el token de seguridad</h2>
          <div className="px-2 space-y-3 mt-5 flex justify-center">
            <OTPInput otp={otp} setOtp={setOtp} />
          </div>
        </form>
      ) : (
        <SecondForm email={email} token={otp} onSubmit={changePasswordMutate} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
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

type SecondFormProps = {
  email: string;
  token: string;
  onSubmit: (data: CambioPassword) => void;
}
const SecondForm = ({ email, token, onSubmit } :SecondFormProps) => {
  const initialValues: CambioPassword = {
    password: "",
    passworRepeat: "",
    token: token,
    email: email
  };

  const { register, handleSubmit } = useForm({
    defaultValues: initialValues
  });

  const handleSubmitPassword = (data) => {
    console.log("Cambiando contraseña", data);
    onSubmit(data);
  };

  return (
    <form className="bg-white w-1/5 rounded-sm px-2 py-4 mt-4" onSubmit={handleSubmit(handleSubmitPassword)}>
      <h2 className="text-2xl font-bold text-slate-700">Ingresa la nueva contraseña.</h2>
      <div className="px-1 space-y-3 mt-5 flex justify-center">
        <div className="flex flex-col space-y-3">
          <input
            type="password"
            placeholder="Nueva contraseña"
            className="bg-gray-100 w-full placeholder:font-bold placeholder:text-semibold py-1"
            {...register("password")}
          />
          <input
            type="password"
            placeholder="Repite la contraseña"
            className="bg-gray-100 w-full placeholder:font-bold placeholder:text-semibold py-1"
            {...register("passworRepeat")}
          />
          <button type="submit" className="mx-auto bg-blue-600 px-4 py-2 text-white font-semibold rounded">Enviar</button>
        </div>
      </div>
    </form>
  );
};

export default TokenForgot;