import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${navbarBg ? 'navbar-scroll' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <b>Portfolio Website</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${navbarBg ? 'nav-link-scroll' : ''}`} aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${navbarBg ? 'nav-link-scroll' : ''}`} href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${navbarBg ? 'nav-link-scroll' : ''}`} href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${navbarBg ? 'nav-link-scroll' : ''}`} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
