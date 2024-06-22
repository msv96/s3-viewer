import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import AuthLayout from "../layouts/Layout";
import NotFound from "../pages/error/NotFound";
import { Home, Login } from "./imports";

export const router = createBrowserRouter([
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Outlet />,
        errorElement: <NotFound />,
        children: [
          {
            path: "",
            element: <Navigate to="/home" />,
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
        path: "public",
        element: <Outlet />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/public/login" />,
      },
    ],
  },
]);
