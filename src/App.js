import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import SelectLocation from "./pages/SelectLocation";
import SelectLogin from "./pages/SelectLogin";
import Search from "./pages/Search";
import Clinical from "./pages/Clinical";
import Observations from "./pages/Observations";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/SelectLocation",
    element: <SelectLocation />,
  },
  {
    path: "/SelectLogin",
    element: <SelectLogin />,
  },
  {
    path: "/Search",
    element: <Search />,
  },
  {
    path: "/Clinical",
    element: <Clinical />,
  },
  {
    path: "/Observations",
    element: <Observations />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Observations /> */}
    </div>
  );
}

export default App;
