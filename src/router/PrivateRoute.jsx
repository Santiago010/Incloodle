import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { jwt } = useSelector((s) => s?.authReducer);
  // console.log(jwt);
  if (!jwt) return <Navigate to="/login" />;
  return children;
};
