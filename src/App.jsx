import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import MasterLayout from "./layout/MasterLayout";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NotFound from "./components/NotFound";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Terms from "./pages/Terms/Terms";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      { element: <Home />, index: true },
      { path: "/products", element: <Products /> },
      { path: "/productDetails", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      { path: "/products", element: <Products /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <About /> },
      { path: "/terms", element: <Terms /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/contact", element: <Contact /> },

      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },

      { path: "/*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
