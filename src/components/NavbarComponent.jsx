import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Half visible logo */}
      <div className="logo-container">
        <img src="/ascilogo.svg" alt="Logo" className="half-logo" />
      </div>

      {/* Navbar */}
      <nav className="custom-navbar">
        {/* Left side - Brand */}
        <div className="navbar-brand" style={{zIndex:1000}}>
          <Link to="/" className="brand-text" style={{ fontSize: "2rem" }}>
            AsCI
          </Link>
        </div>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Right side - Links */}
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/aboutus" className="nav-link">About</Link>
          <Link to="/event" className="nav-link">Events</Link>
          <Link to="/team" className="nav-link">Team</Link>
          <Link to="/contact" className="nav-link">Reach Us</Link>
        </div>
      </nav>
    </>
  );
}
