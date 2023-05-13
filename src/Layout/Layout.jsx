import React from "react";
import Navbar from "../components/Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
