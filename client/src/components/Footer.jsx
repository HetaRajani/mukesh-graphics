import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Heart,
  Shield,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="premium-footer">

      {/* GLOW */}

      <div className="footer-glow footer-glow-1"></div>
      <div className="footer-glow footer-glow-2"></div>

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <div className="footer-logo">

            <div className="logo-box">
              P
            </div>

            <div>
              <h2>PRINTCRAFT</h2>

              <p>PRINTING & PACKAGING</p>
            </div>

          </div>

          <p className="footer-text">
            We craft premium packaging and print solutions
            that elevate your brand and leave a lasting impression.
          </p>

          <div className="footer-line"></div>

          <h4>Follow Us</h4>

          <div className="footer-socials">

            <a href="#">Fb</a>

            <a href="#">Ig</a>

            <a href="#">X</a>

            <a href="#">In</a>

          </div>

        </div>

        {/* LINKS */}

      <div className="footer-links">
  <h3>Quick Links</h3>

  <div className="footer-small-line"></div>

  <a href="/">Home</a>

<a href="/#services">Services</a>

<a href="/#portfolio">Portfolio</a>

<a href="/#about">About Us</a>

<a href="/#contact">Contact Us</a>
</div>

        {/* CONTACT */}

        <div className="footer-contact">

          <h3>Get In Touch</h3>

          <div className="footer-small-line"></div>

          <div className="footer-contact-item">

            <div className="contact-icon">
              <Mail size={18} />
            </div>

            <div>
              <span>Email</span>

              <p>info@printcraft.com</p>
            </div>

          </div>

          <div className="footer-contact-item">

            <div className="contact-icon">
              <Phone size={18} />
            </div>

            <div>
              <span>Phone</span>

              <p>+91 98765 43210</p>
            </div>

          </div>

          <div className="footer-contact-item">

            <div className="contact-icon">
              <MapPin size={18} />
            </div>

            <div>
              <span>Location</span>

              <p>
                Gujarat,
                <br />
                India
              </p>
            </div>

          </div>

        </div>

        {/* HOURS */}

        <div className="footer-hours">

          <h3>Working Hours</h3>

          <div className="footer-small-line"></div>

          <div className="hour-item">

            <Clock3 size={20} />

            <div>
              <span>Monday - Friday</span>

              <p>09:00 AM - 07:00 PM</p>
            </div>

          </div>

          <div className="hour-item">

            <Clock3 size={20} />

            <div>
              <span>Saturday</span>

              <p>09:00 AM - 05:00 PM</p>
            </div>

          </div>

          <div className="hour-item">

            <Clock3 size={20} />

            <div>
              <span>Sunday</span>

              <p className="closed">Closed</p>
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <div className="bottom-box">

          <Shield size={18} />

          <p>
            © 2026 Printcraft. All Rights Reserved.
          </p>

        </div>

        <div className="bottom-box">

          <Heart size={18} />

          <p>
            Crafted for Premium Brands
          </p>

        </div>

        <div className="bottom-box">

          

        </div>

      </div>

    </footer>
  );
}

export default Footer;