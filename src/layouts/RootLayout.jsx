import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/Home/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <main className="pt-16">
        <Outlet></Outlet>
      </main>
      <h1>Footer</h1>
    </div>
  );
};

export default RootLayout;
