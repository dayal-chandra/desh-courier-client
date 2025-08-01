import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/Home/Home/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
