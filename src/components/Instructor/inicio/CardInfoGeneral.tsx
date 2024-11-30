import flechaDerecha  from '@/assets/flechaDerecha.svg'
import { Link } from 'react-router-dom';
export type CardInfoGeneralProps = {
  title: string;
  index: number; // para poder enviar el color que le va a corresponder a ese card por el fondo
  icono: string
  url:string,
  cantidad?: number;
};

type ColorCompuesto = {
  fuerte: string;
  bajo: string;
};

/*
'azul-celeste':'#27a9e3',
'azul-celeste-fuerte':'#2195c9',
'verde-esmeralda':'#28b779',
'verde-esmeralda-fuerte':'#17a668',
'morado':'#852b99',
'morado-fuerte':'#741d88',
'rojo':'#f5585a',
'rojo-fuerte' :'#e40215'
*/
const indexColors: ColorCompuesto[] = [
  {
    fuerte: 'bg-azul-celeste',
    bajo: 'bg-azul-celeste-fuerte'
  },
  {
    fuerte: 'bg-rojo',
    bajo: 'bg-rojo-fuerte'
  },
  {
    fuerte: 'bg-verde-esmeralda',
    bajo: 'bg-verde-esmeralda-fuerte'
  },
  {
    fuerte: 'bg-morado',
    bajo: 'bg-morado-fuerte'
  }
];

export const CardInfoGeneral = ({ title, index, icono,url,cantidad }: CardInfoGeneralProps) => {
  const colorClass = indexColors[index % indexColors.length]; // Usar el índice para obtener el color
  console.log(cantidad)
  return (
    <article className={` ${colorClass.fuerte} w-10/12 rounded-lg flex flex-col justify-between`}>
      <div className='flex'>
        <div className='flex justify-center items-center p-3'>
          <picture className="bg-gray-200 rounded-full w-20 clear-star flex justify-center items-center">
            <img src={icono} alt="icono de la tarjeta" />
          </picture>
        </div>
        <div className='flex  py-3 flex-col'>
          <h2 className='text-5xl text-white font-bold'>{cantidad}</h2>
          <h2 className='text-white font-bold text-2xl'>{title}</h2>
        </div>
      </div>
      <article className={`${colorClass.bajo} px-10 py-1 mt-auto`}>
        <Link to={url} className='flex items-center text-white font-bold gap-3'>
          Ver más
          <img src={flechaDerecha} alt="icono de flecha" />
        </Link>
      </article>
    </article>
  );
};


export default CardInfoGeneral;