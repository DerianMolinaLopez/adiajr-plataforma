
export type PuntuacionesProps={
    puntuacion:number;
    texto:string;
    icono:React.ReactNode;
}
const Puntuaciones = ({puntuacion,texto,icono}:PuntuacionesProps) => {
  return (
    <article className="border-x-2 border-dashed border-azul-verde-bajo pt-5 ">
        <div className="flex justify-center">
            {icono}
            <p className="font-bold text-6xl">
               {puntuacion} 
            </p>
            
            {icono}
        </div>
        <h3 className="text-3xl text-center font-semibold">{texto}</h3>
    </article>
  )
}

export default Puntuaciones
