import { Navigate } from "react-router-dom";
import { useUserState } from "../../store/hooks";

export default function Home() {
  const { isLoggedIn } = useUserState();

  if (!isLoggedIn) {
    return <Navigate to="/public/login" />;
  }

  return <div>Home</div>;
}
