import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/img/logooAIDA.png";
import { UserCircleIcon } from "@heroicons/react/20/solid";

type urlTI = {
  label: string | React.ReactNode;
  url: string;
};

const url: urlTI[] = [
  {
    label: "inicio",
    url: "/alumno/inicio",
  },
  {
    label: "Grupos",
    url: "/alumno/grupos",
  },
  {
    label: "Canjear codigo",
    url: "/alumno/codigo",
  },
  {
    label: "Tareas",
    url: "/alumno/tareas",
  },
  {
    label: "Mis cursos",
    url: "/alumno/cursos",
  },
  {
    label: <UserCircleIcon className="w-10" />,
    url: "/alumno/perfil",
  },
];

const NavegacionAlumno = () => {
  const location = useLocation();

  return (
    <div className="header-banner">
      <picture className="flex justify-between items-center">
        <img className="w-16" src={logo} alt="Logo de la organizacion" />
      </picture>
      <nav className="flex flex-row flex-wrap gap-5 text-white items-center">
        {url.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className={`hover:bg-azul-claro rounded-lg px-2 py-1 text-center
              flex justify-center items-center mt-1
              transition-colors duration-100 ease-in-out w-32 text-center
              ${
                item.url === location.pathname
                  ? "bg-azul-claro"
                  : "bg-azul-oscuro"
              }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavegacionAlumno;