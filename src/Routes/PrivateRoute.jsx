import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Providers/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56 text-center"></progress>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};
export default PrivateRoute;
