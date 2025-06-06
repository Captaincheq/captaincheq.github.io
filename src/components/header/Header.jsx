import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // <- import Link
import './Header.css';
import logo from '../../assets/images/logo.png';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          setMenuOpen(false); // close menu on section change
        }
      });
    }, options);

    sections.forEach(section => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="top-header">
      <nav className="navbar header-nav navbar-expand-lg">
        <div className="header-container">
          <a className="navbar-brand" href="alec.html">
            <img src={logo} alt="logo" width="160" height="80" />
          </a>

          <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-label="Toggle navigation">
            <span></span><span></span><span></span>
          </button>

          <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="navbar-wd">
            <ul className="navbar-nav">
              <li><a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} href="#home">Home</a></li>
              <li><a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} href="#projects">Projects</a></li>
              <li><a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} href="#about">About Me</a></li>
              <li><a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact">Contact</a></li>
              <li>
                <Link className="nav-link" to="/cv">
                  <b><i><u>Cv</u></i></b>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
