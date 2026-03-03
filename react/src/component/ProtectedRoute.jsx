import { useContext } from "react";
import { loginContext } from "./ContextProvider";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isLogin } = useContext(loginContext);

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;