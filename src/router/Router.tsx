import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioInstructorView from "../views/InicioInstructorView";
import LandingPageView from "../views/LandingPageView";
import InstructorLayout from "../Layouts/InstructorLayout";
import LoginView from "../views/Auth/LoginView";
import RegisterView from "../views/Auth/RegisterView";
import InicioView from "../views/Alumnos/InicioView";
import AlumnoLayout from "../Layouts/AlumnoLayout";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Inicio y autenticación */}
                <Route path="/auth/login" element={<LoginView />} />
                <Route path="/auth/register" element={<RegisterView />} />

                {/* Presentación */}
                <Route path="/" element={<LandingPageView />} />

                {/* Rutas de instructor */}
                <Route element={<InstructorLayout />}>
                    <Route path="/instructor/:id/inicio" element={<InicioInstructorView />} />
                </Route>

                {/* Rutas del alumno */}
                <Route element={<AlumnoLayout />}>
                    <Route path="/alumno/inicio" element={<InicioView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;