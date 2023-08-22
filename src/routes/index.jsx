import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import App from "../App";

const router = createBrowserRouter([
    {
    path : "/",
    element : <App/>
   },
   {
    path : "/home",
    element : <Home/>
   },
   {
    path : "/about",
    element : <About/>
   },
   {
    path : "/contact",
    element : <Contact/>
   },
])

export default router