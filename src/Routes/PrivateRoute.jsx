import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

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

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
