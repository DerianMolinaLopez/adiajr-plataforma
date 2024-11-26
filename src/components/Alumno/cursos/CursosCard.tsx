import { Curso } from "@/types/index";
import { cursosTipos, tipoAida } from "@/helpers/diferenciacionTipos";
import { StarIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import EstrellasCalificar from "../valoracion/EstrellasCalificar";
import Rating from "@mui/material/Rating";

type CursosCardProps = {
  curso: Pick<Curso, "_id" | "description" | "name" | "instructor">;
  valoracion:number
};

const CursosCard = ({ curso,valoracion }: CursosCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalValorationOpen, setIsModalValorationOpen] = useState(false);
  const imagen = cursosTipos[curso.tipoCurso] || null;
  const tipoAidaImagen = tipoAida[curso.tipoCurso] || null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalValorationOpen(true);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setIsModalValorationOpen(false);
  };

  return (
    <article className="border-2 border-slate-400 w-full shadow-xl space-y-2 relative">
      <img src={imagen} className="w-full" alt="Imagen del curso" />
      <div className="px-3">
        <h3 className="text-2xl font-semibold flex justify-between">
          {curso.name}
          <button onClick={toggleMenu} className="relative">
            <EllipsisHorizontalIcon className="h-5 w-5" />
          </button>
        </h3>
        <h4 className="text-xl font-semibold">{curso.instructor}</h4>
      </div>
      <div className="px-3">
        <Rating
          name="text-feedback"
          value={valoracion}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li>
              <button
                onClick={openModal}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-bold w-full text-left"
              >
                Calificar curso
              </button>
            </li>
          </ul>
        </div>
      )}
      <div className="flex justify-center px-20">
        <button className="font-bold text-white bg-rosa-rojiso hover:bg-rose-800 transition-colors rounded-md text-xl w-full mb-2">
          Entrar al curso
        </button>
      </div>

      {/* Modal */}
      <Dialog open={isModalValorationOpen} onClose={closeModal} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md p-6 bg-white rounded">
            <DialogTitle className=" font-bold text-cente text-2xl">¿Con cuánto calificarías el curso?</DialogTitle>
            <DialogTitle className="text-center text-lg">Tu opinión nos ayuda a crecer</DialogTitle>
            <div className="mt-4">
              {/* Contenido del modal */}
              <div className="flex justify-center">
                <EstrellasCalificar />
              </div>
              <button
                onClick={closeModal}
                className="mt-4 bg-red-500 text-white p-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </article>
  );
};

export default CursosCard;

/*

      <Rating
            name="text-feedback"
            value={6}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
*/