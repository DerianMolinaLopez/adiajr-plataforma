import { CardsInvertidas } from '../../types'
import { Link } from 'react-router-dom'

type CardSeccionInvertidaProps = {
    card: CardsInvertidas;
}
const CardSeccionInvertida = ({card}:CardSeccionInvertidaProps) => {
    const {title,description,img,invertido,color} = card
  return (
    <article className={`${color} p-5 space-y-5 rounded-sm shadow-lg`}>
      <h3 className='text-center text-white text-md md:text-xl lg:text-2xl font-black mt-10 '>{title}</h3>
      <picture className='flex justify-center items-center w-full'>
        <img className=' w-24 sm:w-1/2 md:w-1/3 lg:w-1/4' src={img} alt="Imagenes de el negocio" />
      </picture>
      <p className='mx-10 text-base sm:text-sm lg:text-lg text-white font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam deleniti enim reiciendis minima illo eius tempore similique tenetur. Optio quaerat praesentium in ex ratione nostrum fugiat laudantium ipsum maxime non.</p>
      <br />
      <Link to="#" className='mx-10 w-full bg-emerald-900 text-white font-semibold rounded-sm p-2'>Ver plan</Link>
    </article>
  )
}

export default CardSeccionInvertida


/*
 return (
    <article className={`flex justify-around mb-20 ${color} size-h items-center`}>
      {invertido ? (
        <>
          <div className='w-1/2 space-y-5'>
            <h2 className='text-3xl text-center font-black text-white '>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dignissimos, nam labore. Dicta magni labore, enim voluptatibus 
                numquam voluptatem provident consequatur sapiente corrupti ipsa,
                 accusamus earum reiciendis obcaecati. Nostrum, facilis porro.</p>
          </div>
          <div className='w-1/2 mx-10'>
            <picture className='flex justify-center'>
                <img className='w-1/2' src={img} alt="Imagenes de el negocio" />
            </picture>
          </div>
        </>
      ) : (
        <>
          <div className='w-1/2 mx-10'>
            <picture className='flex justify-center'>
                <img className='w-1/2' src={img} alt="Imagenes de el negocio" />
            </picture>
          </div>
          <div className='w-1/2 space-y-5'>
            <h2 className='text-3xl text-center font-black text-white '>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dignissimos, nam labore. Dicta magni labore, enim voluptatibus 
                numquam voluptatem provident consequatur sapiente corrupti ipsa,
                 accusamus earum reiciendis obcaecati. Nostrum, facilis porro.</p>
          </div>
        </>
      )}
    </article>
*/