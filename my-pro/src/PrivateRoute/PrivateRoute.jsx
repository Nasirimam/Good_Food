import { Alert, AlertIcon } from "@chakra-ui/react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AppContext);

  if (isAuth) {
    return <Navigate to="/" />;
  }
    return children
};

export default PrivateRoute;
