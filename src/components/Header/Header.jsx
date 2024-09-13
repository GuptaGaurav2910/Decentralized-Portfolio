import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a onClick={() => window.location.reload()} className="logo">Portfolio</a>
      <nav className="navbar">
        <a href="#home" style={{ "--i": 1 }}>Home</a>
        <a href="#about" style={{ "--i": 2 }}>About</a>
        <a href="#skills" style={{ "--i": 3 }}>Skills</a>
        <a href="#services" style={{ "--i": 4 }}>Projects</a>
        <a href="#contact" style={{ "--i": 5 }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
