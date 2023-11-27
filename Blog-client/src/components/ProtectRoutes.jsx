import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectRoutes = () => {
  let admin = true;

  return admin ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectRoutes;
