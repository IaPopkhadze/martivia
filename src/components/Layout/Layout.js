import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "../Slider";
import { Outlet } from "react-router-dom";
import Vehicles from "../Vehicles";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />

{/* 
      <Footer /> */}
    </div>
  );
};

export default Layout;
