import { Outlet } from "react-router-dom"
import InstructorNav from "../components/Instructor/InstructorNav"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
const InstructorLayout = () => {
  return (
    <div className="flex flex-row mx-auto">
      <InstructorNav/>
      <main className="w-full bg-gray-300">
        <Outlet />
      </main>
  
      <ToastContainer/>
    </div>
  )
}

export default InstructorLayout
