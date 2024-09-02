import { BrowserRouter,Routes,Route } from "react-router-dom";
import InicioInstructorView from "../views/InicioInstructorView";
import LandingPageView from "../views/LandingPageView";
import InstructorLayout from "../Layouts/InstructorLayout";
import LoginView from "../views/Auth/LoginView";
import RegisterView from "../views/Auth/RegisterView";
import InicioView from "../views/Alumnos/InicioView";
const Router = () =>{
    return(
        <BrowserRouter>
                 {/*Inicio y autenticacion */}
                 <Routes>
                    <Route index path={`/auth/login`} element={<LoginView/>}/>
                    <Route index path={`/auth/register`} element={<RegisterView/>}/>
                 </Routes>
                 {/*presentacion */}
                <Routes >
                <Route index path={`/`} element={<LandingPageView/>}/>
                    
                </Routes>
            <Routes>
                {/*Rutas de instructor*/}
                <Route  element={<InstructorLayout/>}>
                    <Route index path={`/instructor/:id/inicio`} element={<InicioInstructorView/>}/>
                </Route>
            </Routes>
            {/*Rutas del alumno */}
            <Routes>
                <Route path="/alumno/inicio" element ={<InicioView></InicioView>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router