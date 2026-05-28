import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="main-navbar">

        {/* LOGO */}
        <Link
          to="/"
          className="main-brand"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="PrintCraft Express"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="main-links">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/clients">Our Clients</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        {/* BUTTON */}
        <Link
          to="/request-quote"
          className="header-btn"
        >
          Request Quote →
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <Link
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/portfolio"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </Link>

          <Link
            to="/clients"
            onClick={() => setOpen(false)}
          >
            Our Clients
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>

          <Link
            to="/request-quote"
            className="mobile-quote-btn"
            onClick={() => setOpen(false)}
          >
            Request Quote →
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;