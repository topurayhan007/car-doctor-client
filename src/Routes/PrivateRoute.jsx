import { useContext } from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center my-12">
        <div
          className="radial-progress animate-spin"
          style={{ "--value": 70 }}
        ></div>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
