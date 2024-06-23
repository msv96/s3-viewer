import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/Layout";
import ProtectedRoute from "../layouts/ProtectedRoute";
import NotFound from "../pages/error/NotFound";
import { Home, Login } from "./imports";

export const router = createBrowserRouter([
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <ProtectedRoute />,
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
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Navigate to="/login" />,
      },
    ],
  },
]);
