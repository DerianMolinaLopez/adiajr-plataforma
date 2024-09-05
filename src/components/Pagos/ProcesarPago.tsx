import React from 'react'
import bannerPago from "@/assets/bannerPago.svg"
import CardProcesarPago from './CardProcesarPago'
import useStoreCompras from '@/contexts/PlanesPagoStore'
const ProcesarPago = () => {
    const {getPlanPago} = useStoreCompras()

    const pago = getPlanPago()
  return (
    <main className='flex flex-row h-screen gap-6'>
      <picture className='w-3/4  mt-32 ml-32'>
        <img src={bannerPago} className=' w-full shadow-lg' alt="banner del procedo de pago" />
      </picture>
      <article className='mt-32 max-h-96 h-auto   w-1/2 mr-40 '>
        {pago&&<CardProcesarPago pago={pago}></CardProcesarPago>}
        
      </article>
    </main>
  )
}

export default ProcesarPago
