import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Gem,
  Package,
  Star,
  CalendarDays,
} from "lucide-react";

import "./About.css";

function About() {
  return (
    <section className="about-premium">

      <div className="about-glow"></div>

      <div className="about-layout">

        {/* LEFT */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="about-label">
            ABOUT US
          </p>

          <div className="about-line"></div>

          <h2>
            We create <br />
            packaging that <br />
            people <span>remember.</span>
          </h2>

          <p className="about-small-text">
            At Mukesh Graphics, we combine precision printing,
            luxury materials, and creative thinking to deliver
            packaging and branding that leave a lasting impact.
          </p>

          <div className="about-image-wrap">

            <img
              src="/images/about-packaging.png"
              alt="Premium packaging"
            />

            <div className="quality-card">

              <div className="quality-icon">
                <Gem size={28} />
              </div>

              <div>
                <h4>Premium Quality</h4>

                <p>
                  Luxury materials.
                  <br />
                  Flawless finish.
                </p>
              </div>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="right-top-line"></div>

          <h3>
            More Than Printing.
            <br />
            We Build Brand Experiences.
          </h3>

          <p className="about-description">
            We’re a creative production studio focused on helping
            brands stand out through premium packaging,
            modern printing, and strong visual identity.
          </p>

          <p className="signature">
            MUKESH GRAPHICS
          </p>

          <div className="divider"></div>

          <div className="about-stats">

            <div className="stat-card">

              <span>
                <Package size={22} />
              </span>

              <h4>500+</h4>

              <p>Projects Completed</p>

            </div>

            <div className="stat-card">

              <span>
                <Star size={22} />
              </span>

              <h4>120+</h4>

              <p>Brands Served</p>

            </div>

            <div className="stat-card">

              <span>
                <CalendarDays size={22} />
              </span>

              <h4>10+</h4>

              <p>Years Experience</p>

            </div>

          </div>

          <div className="divider"></div>

          <Link
            to="/about"
            className="about-btn"
          >
            Learn More →
          </Link>

        </motion.div>

      </div>

    </section>
  );
}

export default About;