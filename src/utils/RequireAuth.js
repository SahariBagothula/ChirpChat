import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../context/AuthenticationContext";


export const RequireAuth = ({ children }) => {
  const { isSignIn } = useContext(AuthenticationContext);
  return <> {isSignIn ? children : <Navigate to="/signin" />} </>;
};