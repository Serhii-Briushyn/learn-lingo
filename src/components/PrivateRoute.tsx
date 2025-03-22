import { useAuth } from "hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "./Loader/Loader";

const PrivateRoute: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  return user ? <Outlet /> : <Navigate to="/teachers" replace />;
};

export default PrivateRoute;
