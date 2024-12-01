import { Link } from "react-router-dom";
import { HomeIcon, CalendarIcon } from "@heroicons/react/20/solid";
import { useLocation } from "react-router-dom";

const InstructorNav = () => {
  const location = useLocation();


  return (
    <nav className="w-16 bg-azul-oscuro h-screen py-4 flex items-center space-y-4 flex-col">
      <Link
        to="/instructor/inicio"
        className={`${
          location.pathname === "/instructor/inicio"
            ? "text-indigo-600 bg-gray-100 rounded-sm"
            : "text-white"
        }`}
      >
        <HomeIcon className="w-10" />
      </Link>
      <Link
        to="/instructor/crear-tareas"
        className={`${
          location.pathname === "/instructor/tareas"
            ? "text-indigo-600 bg-gray-100 rounded-sm"
            : "text-white"
        }`}
      >
        <CalendarIcon className="w-10" />
      </Link>
    </nav>
  );
};

export default InstructorNav;