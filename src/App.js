import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Shop from "./Components/Shop/Shop";
import Orders from "./Components/Orders/Orders";
import Inventory from "./Components/Inventory/Inventory";
import About from "./Components/About/About";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop />,
        },
        {
          path: "orders",
          loader: () => fetch("products.json"),
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
