import { Footer } from "../UI/Footer"
import { Header } from "../UI/Header"
import { Outlet } from "react-router-dom"

export const AppLayout =()=>{
    return (
         <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
    )
}