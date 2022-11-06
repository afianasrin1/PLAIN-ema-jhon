import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Shop from "./Components/Shop/Shop";
import Orders from "./Components/Orders/Orders";
import Inventory from "./Components/Inventory/Inventory";
import About from "./Components/About/About";
import { productsAndCartLoader } from "./Loader/productsAndCartLoader";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Shipping from "./Components/Shipping/Shipping";
import PrivatesRoutes from "./PrivateRoutes/PrivatesRoutes";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          // loader: () => fetch("http://localhost:5000/products"),
          element: <Shop />,
        },
        {
          path: "orders",
          loader: productsAndCartLoader,
          element: <Orders />,
        },
        {
          path: "inventory",
          element: (
            <PrivatesRoutes>
              <Inventory />
            </PrivatesRoutes>
          ),
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "shipping",
          element: (
            <PrivatesRoutes>
              <Shipping />
            </PrivatesRoutes>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
