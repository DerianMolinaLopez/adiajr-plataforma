import { BrowserRouter,Routes,Route } from "react-router-dom";
import InicioInstructorView from "../views/InicioInstructorView";
import LandingPageView from "../views/LandingPageView";
import InstructorLayout from "../Layouts/InstructorLayout";
const Router = () =>{
    return(
        <BrowserRouter>
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
        </BrowserRouter>
    )
}
export default Router