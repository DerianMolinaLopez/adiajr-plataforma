import { Outlet } from "react-router-dom"
import InstructorNav from "../components/Instructor/InstructorNav"
const InstructorLayout = () => {
  return (
    <div className="flex flex-row mx-auto">
      <InstructorNav/>
      <main className="w-full bg-gray-200">
        <Outlet />
      </main>
      
    </div>
  )
}

export default InstructorLayout
