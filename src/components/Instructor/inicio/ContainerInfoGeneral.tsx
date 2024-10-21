import { CardInfoGeneral, CardInfoGeneralProps } from "./CardInfoGeneral";


import icono from "@/assets/grupos.svg";
import icono2 from "@/assets/codigo.svg";
import icono3 from "@/assets/hombreMujer.svg";
import icono4 from "@/assets/tarea.svg";

/*
1-para enviar una cantidad numerica debe de vernir desde el servidor
  solo retornar el valor numerico solicitado
2- al hacer click sobre el card, debe de redirigirte a una pagina 
donde puedas ver el informe en formato de lista de una fomra mas detallada
*/

/*
  title: string;
  index: number; // para poder enviar el color que le va a corresponder a ese card por el fondo
  icono: string
*/

export const ContainerInfoGeneral = () => {
  const objCardGeneral: CardInfoGeneralProps[] = [
    {
      title: "Total de grupos",
      index: 0,
      icono: icono
    },
    {
      title: "Total de alumnos",
      index: 1,
      icono: icono4
    },
    {
      title: "Tareas pendientes por revisar",
      index: 2,
      icono: icono3
    },
    {
      title: "Codigos de uniones generados",
      index: 3,
      icono:  icono2
    }
  ];

  return (
    <>
      <h2 className="px-10 font-semibold text-2xl mt-10">Informe general</h2>
      <section className="grid grid-cols-2 mx-10 gap-5 mt-10">
        {objCardGeneral.map(({ title, index, icono }) => (
          <CardInfoGeneral key={index} index={index} title={title} icono={icono} />
        ))}
      </section>
    </>
  );
};

export default ContainerInfoGeneral;