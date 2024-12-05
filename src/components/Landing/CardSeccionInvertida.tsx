import { CardsInvertidas } from '../../types'
import { Link } from 'react-router-dom'
import flecha from '@/assets/flechaDerecha.svg'

type CardSeccionInvertidaProps = {
    card: CardsInvertidas;
}
const CardSeccionInvertida = ({card}:CardSeccionInvertidaProps) => {
    const {title,description,img,invertido,color} = card
  return (
    <article className={`${color} p-5 space-y-5 rounded-sm shadow-lg w-1/2`}>
      <h3 className='text-center text-white text-md md:text-xl lg:text-3xl font-black mt-10 '>{title}</h3>
      <picture className='flex justify-center items-center w-full'>
        <img className=' w-24 sm:w-1/2 md:w-1/3 lg:w-1/4' src={img} alt="Imagenes de el negocio" />
      </picture>
      <p className='mx-10 px-10 text-semibold text-base sm:text-sm lg:text-2xl text-white font-semibold'>
        {card.description}
      </p>
      <br />
      <Link to={card.url} className='mx-10 w-full flex justify-center pr-10 gap-2 items-center text-3xl text-white font-semibold rounded-sm p-2'>
        
          Ver planes
          <img src={flecha} className='w-8' alt="flecha direccion" />   
      </Link>
    </article>
  )
}

export default CardSeccionInvertida

