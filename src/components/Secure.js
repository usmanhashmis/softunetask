import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../components/Login";
function Secure() {
  const protectCateg = localStorage.getItem("token");
  return protectCateg ? <Outlet /> : <Login/>;
}

export default Secure;
