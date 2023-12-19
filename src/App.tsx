import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import DarkModeContextProvider from "./components/contexts/DarkModeContext/DarkModeContextProvider";
import DarkModeButton from "./components/DarkModeButton";
import { DarkModeButtonSize } from "./components/DarkModeButton/types";
import SideBar from "./components/SideBar";
import UserContextProvider from "./components/contexts/UserContext/UserContextProvider";
import Admin from "./pages/Admin";
import LogIn from "./pages/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-black-100 text-center bg-primary text-primary">
        Hello world!
      </div>
    ),
  },
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        path: "dashboard",
        element: (
          <div className="bg-black-100  text-center bg-primary text-primary ">
            dashboard
          </div>
        ),
      },
      {
        path: "products",
        element: (
          <div className="bg-black-100  text-center bg-primary text-primary ">
            products
          </div>
        ),
      },
      {
        path: "statistics",
        element: (
          <div className="bg-black-100 bg-primary text-primary text-center  ">
            statistics
          </div>
        ),
      },
      {
        path: "massages",
        element: (
          <div className="bg-black-100 bg-primary text-primary text-center  ">
            massages
          </div>
        ),
      },
      {
        path: "calender",
        element: (
          <div className="bg-black-100 bg-primary text-primary text-center  ">
            calender
          </div>
        ),
      },
      {
        path: "orders",
        element: (
          <div className="bg-black-100 bg-primary text-primary text-center  ">
            orders
          </div>
        ),
      },
      {
        path: "chat",
        element: (
          <div className="bg-black-100 bg-primary text-primarytext-center  ">
            chat
          </div>
        ),
      },
      {
        path: "settings",
        element: (
          <div className="bg-black-100 bg-primary text-primary text-center  ">
            settings
          </div>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <DarkModeContextProvider>
      <UserContextProvider>
        <div className="h-screen w-screen bg-primary">
          {/* <div className="w-full">
            <SideBar />
          </div> */}

          <div>
            <RouterProvider router={router} />
          </div>
        </div>
      </UserContextProvider>
    </DarkModeContextProvider>
  );
}
