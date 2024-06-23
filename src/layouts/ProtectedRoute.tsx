import { Navigate, Outlet } from "react-router-dom";
import { useUserState } from "../store/hooks";

export default function ProtectedRoute() {
  const { isLoggedIn } = useUserState();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
