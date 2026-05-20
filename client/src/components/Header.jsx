import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <nav className="main-navbar">

        <Link to="/" className="main-brand">

          <img
            src="/images/logo.png"
            alt="PrintCraft"
          />

          <div>
            <h2>PRINTCRAFT</h2>
            <p>CREATIVE PACKAGING STUDIO</p>
          </div>

        </Link>

        <div className="main-links">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/clients">Our Clients</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <Link
          to="/request-quote"
          className="header-quote-btn"
        >
          Request Quote →
        </Link>

      </nav>
    </header>
  );
}

export default Header;