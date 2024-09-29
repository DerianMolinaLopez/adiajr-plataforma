import estrellas from '@/assets/estrella.svg';
import { useEffect } from 'react';

type CrearEstrellasProps = {
    puntuacion: number;
};

const CrearEstrellas = ({ puntuacion }: CrearEstrellasProps) => {
    useEffect(() => {
        if (puntuacion !== 0) {
            // Aquí puedes agregar cualquier lógica adicional si es necesario
        }
    }, [puntuacion]);

    return (
        <div className="flex">
            {Array.from({ length: puntuacion }, (_, index) => (
                <img key={index} src={estrellas} alt="Estrella" className="w-6 h-6" />
            ))}
        </div>
    );
};

export default CrearEstrellas;