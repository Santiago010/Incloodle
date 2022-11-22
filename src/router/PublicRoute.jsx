import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useIsLogged } from "../hooks/useIsLogged";

export const PublicRoute = ({ children }) => {
  useIsLogged();
  const { isAuth } = useSelector((s) => s?.authReducer);
  if (isAuth) return <Navigate to="/" />;
  return children;
};
