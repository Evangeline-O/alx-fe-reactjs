import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // change this to true to allow access
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
