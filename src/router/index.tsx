import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import AuthLayout from "../pages/Layout";
import NotFound from "../pages/error/NotFound";
import { Home, Login } from "./imports";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    children: [
      {
        path: "",
        element: <AuthLayout />,
        errorElement: <NotFound />,
        children: [
          {
            path: "",
            element: <Navigate to={"/home"} />,
          },
          {
            path: "home",
            element: <Home />,
          },
        ],
      },
      {
        path: "not-found",
        element: <NotFound />,
      },
      {
        path: "public/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Navigate to={"/home"} />,
      },
    ],
  },
]);
