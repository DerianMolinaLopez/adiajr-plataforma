import React from 'react'
import PlanesPagoEscolares from '@/components/Landing/PlanesPagoEscolares'
import useStoreCompras from '@/contexts/PlanesPagoStore'
import ProcesarPago from '@/components/Pagos/ProcesarPago'
const PagosEstructoresView = () => {
  const {getPlanPago} = useStoreCompras()

  const pago = getPlanPago()

  return (
    <div>
      {pago!=null?
      (
        <ProcesarPago/>
      )
      :
      (<>
      <PlanesPagoEscolares></PlanesPagoEscolares>
      </>)}
      
    </div>
  )
}

export default PagosEstructoresView
