
import banner from "@/assets/img/bannerRojo.png"
const BannerRojo = () => {
  return (
  <>
  <picture className='w-full'>
      
      <img className='w-full' src={banner} alt='Imagen del baner roja' />
    </picture>
    <div className="mt-3 text-center">
      <button className="bg-rojo-brilloso hover:bg-rojo-brilloso-hover transition-colors duration-150 text-white font-semibold p-4 text-xl rounded-lg">
      Crear una cuenta
    </button>
    </div>
    
  </>
    
  )
}

export default BannerRojo
