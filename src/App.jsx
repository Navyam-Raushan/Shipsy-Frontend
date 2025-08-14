import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./Pages/Home"
import { AppLayout } from "./components/layout/AppLayout"
import { About } from "./Pages/About"
import { Product } from "./Pages/Product"
import { Contect } from "./Pages/Contect"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ProductDetails } from "./components/UI/ProductDetails"
import { AdminReg } from "./Pages/AdminReg"
import { AdminLogin } from "./Pages/AdminLogin";
import { AddProduct } from "./Pages/AddProduct";
import { UpdateProduct } from "./Pages/UpdateProduct";


const App =()=>{
     const queryClient = new QueryClient();
     const router = createBrowserRouter([
      {
        path: "/",
        element: <AppLayout/>,
        children: [
          {
            path: "/",
            element: <Home/>
          },
          {
            path: "/about",
            element: <About/>
          },
          {
            path: "/product",
            element: <Product/>
          },
          {
            path: "/product/:id",
            element: <ProductDetails/>
          },
          {
            path: "/contect",
            element: <Contect/>

          },
          {
            path: "/admin-reg",
            element:<AdminReg/>
          },
          {
            path: "/admin-login",
            element:<AdminLogin/>
          },
          {
            path: "/add-product",
            element: <AddProduct/>
          },
          {
            path: "update-product/:id",
            element: <UpdateProduct/>
          }
        ]
      }
     ])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
