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


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Inicio y autenticación */}
                <Route path="/auth/login" element={<LoginView />} />
                <Route path="/auth/register" element={<RegisterView />} />

                {/* Presentación */}
            
                <Route index element={<LandingPageView />} />
                <Route path="/pago/escolares" element={<PlanesPagoEscolares/>} />

                
                {/* Rutas de instructor */}
                <Route element={<InstructorLayout />}>
                    <Route path="/instructor/inicio" element={<InicioInstructorView />} />
                    <Route path="/instructor/planes-pago" element={<PagosEstructoresView/>} />
                </Route>

                {/* Rutas del alumno */}
                <Route element={<AlumnoLayout />}>
                    <Route path="/alumno/inicio" element={<InicioView />} />
                    <Route path="/alumno/curso" element={<PagosCursosView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;