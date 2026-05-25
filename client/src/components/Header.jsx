import { Link } from "react-router-dom";

import "./Header.css";

function Header() {

  return (

    <header className="main-header">

      <div className="main-navbar">

        {/* LOGO */}

        <Link
          to="/images/logo.png"
          className="main-brand"
        >

          <img
            src="/images/logo.png"
            alt="Printcraft"
          />

          <div className="brand-text">

            <h2>PRINTCRAFT</h2>

            <p>
              CREATIVE PACKAGING STUDIO
            </p>

          </div>

        </Link>

        {/* LINKS */}

        <nav className="main-links">

          <Link to="/">Home</Link>

          <Link to="/portfolio">
            Portfolio
          </Link>

          <Link to="/clients">
            Our Clients
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

        </nav>

        {/* BUTTON */}

        <Link
          to="/request-quote"
          className="header-btn"
        >
          Request Quote →
        </Link>

      </div>

    </header>

  );

}

export default Header;