import React from "react";
import Navbar from "../Components/NavbarComponent";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom"; // Import Outlet

const Outline = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This will render the child routes */}
      <Footer />
    </div>
  );
};

export default Outline;
