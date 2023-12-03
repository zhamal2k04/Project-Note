import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "2rem" }}></div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
