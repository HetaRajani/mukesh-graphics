import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <section className="home-contact-cta">

      <div className="cta-glow"></div>

      <p className="cta-label">
        READY TO START?
      </p>

      <h2>
  Have a Packaging Idea? <br />
  Let’s Make It <span>Premium.</span>
</h2>

      <p className="cta-text">
        We craft modern packaging, luxury branding,
        and premium print experiences for ambitious brands.
      </p>

      <div className="cta-buttons">

        <Link
          to="/contact"
          className="cta-outline"
        >
          Contact Us
        </Link>

        <Link
          to="/request-quote"
          className="cta-filled"
        >
          Request Quote →
        </Link>

      </div>

    </section>
  );
}

export default Contact;