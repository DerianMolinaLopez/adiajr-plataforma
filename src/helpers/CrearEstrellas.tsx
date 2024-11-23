import estrellas from '@/assets/estrella.svg';
import mediaEstrella from '@/assets/img/media_estrella.png';
import generarId from './generarId';
import { useEffect, useState } from 'react';

type CrearEstrellasProps = {
  puntuacion: number;
};

const CrearEstrellas = ({ puntuacion }: CrearEstrellasProps) => {


  const [estrellasArray, setEstrellasArray] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const estrellasTemp: JSX.Element[] = [];
    const entero = Math.floor(puntuacion);
    const decimal = puntuacion - entero;

    for (let i = 0; i < entero; i++) {
      estrellasTemp.push(<img key={generarId()} src={estrellas} alt="Estrella" className="w-6 h-6" />);
    }

    if (decimal >= 0.5) {
      estrellasTemp.push(<img key={generarId()} src={mediaEstrella} alt="Media Estrella" className="w-6 h-6" />);
    }

    setEstrellasArray(estrellasTemp);
  }, [puntuacion]);

  return (
    <div className="flex">
      {estrellasArray}
    </div>
  );
};

export default CrearEstrellas;