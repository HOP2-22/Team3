import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./nav/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className={`min-h-screen flex flex-col justify-between `}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
