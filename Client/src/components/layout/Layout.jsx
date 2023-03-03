import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./nav/Navbar";
import { useContext } from "react";
import { Context } from "../../provider/Context";

const Layout = ({ children }) => {
  const { create } = useContext(Context);

  return (
    <>
      <div
        className={`${
          create ? "h-screen overflow-hidden" : "min-h-screen"
        } flex flex-col justify-between `}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
