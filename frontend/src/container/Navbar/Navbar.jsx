import React from 'react'
import "./Navbar.css"
import { useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
      <a className="navbar-brand" href="/">
        <h1 className='fs-1 font-sans'>Test</h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleLinks}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${showLinks ? 'show' : ''}`}>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/form">
              Form
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/table">
              Table
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar