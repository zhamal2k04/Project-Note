import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Your Website Name. All Rights
          Reserved.
        </p>
        <p>
          Designed with <i className="bi bi-heart-fill text-danger"></i> by Your
          Name
        </p>
      </div>
    </footer>
  );
};

export default Footer;
