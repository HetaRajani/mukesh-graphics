import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-column">

            <div className="footer-brand">
  <img
    src="/images/logo.png"
    alt="Mukesh Graphics Logo"
    className="footer-logo"
  />
</div>

            <p className="footer-text">
              We craft premium packaging and print solutions
              that elevate your brand and leave a lasting
              impression.
            </p>

            <div className="footer-line"></div>

            <h3>Follow Us</h3>

            <div className="social-links">
              <a href="/">Fb</a>
              <a href="/">Ig</a>
              <a href="/">X</a>
              <a href="/">In</a>
            </div>

          </div>

          {/* LINKS */}
          <div className="footer-column">

            <h3>Quick Links</h3>

            <div className="footer-line"></div>

            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>

          </div>

          {/* CONTACT */}
          <div className="footer-column">

            <h3>Get In Touch</h3>

            <div className="footer-line"></div>

            <div className="footer-info">

              <div className="footer-icon">✉</div>

              <div>
                <strong>Email</strong>
                <p>info@mukeshgraphics.com</p>
              </div>

            </div>

            <div className="footer-info">

              <div className="footer-icon">☎</div>

              <div>
                <strong>Phone</strong>
                <p>+91 98765 43210</p>
              </div>

            </div>

            <div className="footer-info">

              <div className="footer-icon">⌖</div>

              <div>
                <strong>Location</strong>
                <p>Gujarat, India</p>
              </div>

            </div>

          </div>

          {/* HOURS */}
          <div className="footer-column">

            <h3>Working Hours</h3>

            <div className="footer-line"></div>

            <div className="footer-info">

              <div className="footer-icon">◷</div>

              <div>
                <strong>Monday - Friday</strong>
                <p>09:00 AM - 07:00 PM</p>
              </div>

            </div>

            <div className="footer-info">

              <div className="footer-icon">◷</div>

              <div>
                <strong>Saturday</strong>
                <p>09:00 AM - 05:00 PM</p>
              </div>

            </div>

            <div className="footer-info">

              <div className="footer-icon">◷</div>

              <div>
                <strong>Sunday</strong>
                <p>Closed</p>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>© 2026 Mukesh Graphics. All Rights Reserved.</p>

          <p>Crafted for Premium Brands</p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;