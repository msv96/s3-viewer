import { lazy } from "react";

// public
export const Login = lazy(() => import("../pages/public/Login"));

// auth
export const Home = lazy(() => import("../pages/auth/Home"));
