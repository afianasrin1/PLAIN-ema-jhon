import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Shop from "./Components/Shop/Shop";
import Orders from "./Components/Orders/Orders";
import Inventory from "./Components/Inventory/Inventory";
import About from "./Components/About/About";
import { productsAndCartLoader } from "./Loader/productsAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: productsAndCartLoader,
          element: <Shop />,
        },
        {
          path: "orders",
          loader: productsAndCartLoader,
          element: <Orders />,
        },
        {
          path: "inventory",
          element: <Inventory />,
        },
        {
          path: "about",
          element: <About />,
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
