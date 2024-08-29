import Header from "../components/Landing/Header"
import Presentacion from "../components/Landing/Presentacion"
import SobreNosotros from "../components/Landing/SobreNosotros"
import SeccionPlanesPago from "../components/Landing/SeccionPlanesPago"
import Footer from "../components/Landing/Footer"
const LandingPageView = () => {
  return (
    <div className="mx-auto max-w-screen-2xl bg-gray-200">
    <div className=" relative">
      <Header />
    </div>
    <div className="h-16">
    </div>
    
    <Presentacion />
    
    <SobreNosotros/>

    <SeccionPlanesPago/>
    <Footer/>
    </div>
    
  )
}

export default LandingPageView
