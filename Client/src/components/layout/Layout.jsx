import React from "react";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="">
        <nav>Navbar</nav>
        <main>{children}</main>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
