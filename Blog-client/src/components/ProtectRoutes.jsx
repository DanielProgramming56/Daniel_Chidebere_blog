import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectRoutes = ({admin}) => {

  return admin ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectRoutes;
