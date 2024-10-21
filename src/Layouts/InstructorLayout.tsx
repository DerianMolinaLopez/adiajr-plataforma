import { Outlet } from "react-router-dom"
import InstructorNav from "../components/Instructor/InstructorNav"
import { Noticias } from "@/components/Instructor/noticias/Noticias"
const InstructorLayout = () => {
  return (
    <div className="flex flex-row mx-auto">
      <InstructorNav/>
      <main className="w-full bg-gray-300">
        <Outlet />
      </main>
      <aside className="h-screen bg-azul-oscuro w-1/4">
        <Noticias/>
      </aside>
    </div>
  )
}

export default InstructorLayout
