import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>PrintCraft Express</h2>

      <ul style={styles.menu}>

        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/portfolio" style={styles.link}>
            Portfolio
          </Link>
        </li>

        <li>
          <Link to="/clients" style={styles.link}>
            Our Clients
          </Link>
        </li>

        <li>
          <Link to="/about" style={styles.link}>
            About
          </Link>
        </li>

        <li>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </li>

      </ul>

      <Link to="/contact" style={styles.button}>
        Get Quote
      </Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    position: "sticky",
    top: 0,
    background: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    zIndex: 1000,
  },

  logo: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#111827",
  },

  menu: {
    display: "flex",
    gap: "28px",
    listStyle: "none",
    alignItems: "center",
  },

  link: {
    textDecoration: "none",
    color: "#111827",
    fontWeight: "500",
    transition: "0.3s",
  },

  button: {
    padding: "12px 20px",
    background: "#7c3aed",
    color: "#fff",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default Navbar;