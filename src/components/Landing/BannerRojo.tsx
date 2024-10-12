
import banner from "@/assets/img/bannerRojo.png"
import { useNavigate } from "react-router-dom"
const BannerRojo = () => {
  const navigate = useNavigate()
  return (
  <>
  <picture className='w-full'>
      
      <img className='w-full' src={banner} alt='Imagen del baner roja' />
    </picture>
    <div className="mt-3 text-center">
      <button 
      onClick={() => navigate('/auth/register')}
      className="bg-rojo-brilloso hover:bg-rojo-brilloso-hover transition-colors duration-150 text-white font-semibold p-4 text-xl rounded-lg">
      Crear una cuenta
    </button>
    </div>
    
  </>
    
  )
}

export default BannerRojo
