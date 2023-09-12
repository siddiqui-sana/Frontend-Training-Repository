import Layout from "./components/Layout/Layout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Service from "./pages/services/Servicecontainer";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Contactcontainer from "./pages/contact/Contactcontainer";
import Pagenotfound from "./pages/Pagenotfound";
import Bookatable from "./pages/Bookatable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      //   { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/service", element: <Service /> },
      { path: "/menu", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/contact", element: <Contactcontainer /> },
      { path: "/bookatable", element: <Bookatable /> },
      { path: "*", element: <Pagenotfound /> },
    ],
  },
]);

export default router;
