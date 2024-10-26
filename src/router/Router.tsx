import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioInstructorView from "../views/InicioInstructorView";
import LandingPageView from "../views/LandingPageView";
import InstructorLayout from "../Layouts/InstructorLayout";
import LoginView from "../views/Auth/LoginView";
import RegisterView from "../views/Auth/RegisterView";
import InicioView from "../views/Alumnos/InicioView";
import AlumnoLayout from "../Layouts/AlumnoLayout";
import PagosCursosView from "@/views/Alumnos/PagosCursosView";
import PagosEstructoresView from "@/views/Pagos/PagosEstructoresView";
import PlanesPagoEscolares from "@/components/Landing/PlanesPagoEscolares";
import CursosView from "@/views/Alumnos/CursosView";
import { ForgotPassword } from "@/views/Auth/ForgotPassword";
import { TokenForgot } from "@/views/Auth/TokenForgot";
import { UnionCodeView } from "@/views/instructores/UnionCodeView";
import { GruposView } from "@/views/instructores/GruposView";
// url/auth/forgot/token
//http://localhost:5173/auth/forgot/token
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Inicio y autenticación */}
                <Route path="/auth/login" element={<LoginView />} />
                <Route path="/auth/register" element={<RegisterView />} />
                <Route path="/auth/forgot" element={<ForgotPassword/>} />
                <Route path="/auth/forgot/token" element={<TokenForgot/>} />

                {/* Presentación */}
                <Route index element={<LandingPageView />} />
                <Route path="/pago/escolares" element={<PlanesPagoEscolares />} />

                {/* Rutas de instructor */}
                <Route element={<InstructorLayout />}>
                    <Route path="/instructor/inicio" element={<InicioInstructorView />} />
                    <Route path="/instructor/planes-pago" element={<PagosEstructoresView />} />
                    <Route path="/instructor/unioncode" element={<UnionCodeView />} />
                    <Route path="/instructor/grupos" element={<GruposView />} />
                </Route>

                {/* Rutas del alumno */}
                <Route element={<AlumnoLayout />}>
                    <Route path="/alumno/inicio" element={<InicioView />} />
                    <Route path="/alumno/curso" element={<PagosCursosView />} />
                    <Route path="/alumno/cursos" element={<CursosView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};  

export default Router;