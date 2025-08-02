import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/Home/Navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <main className="pt-16">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
