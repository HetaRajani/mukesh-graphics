import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Hero.css";

function Hero() {

  return (

    <section className="hero">

      <div className="circle-glow"></div>

      <div className="dot-pattern"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="tag">
          Premium Packaging • Printing • Branding
        </p>

        <h1>
          Designing Packaging <br />
          That Makes Brands <br />
          <span>Unforgettable</span>
        </h1>

        <p className="subtitle">
          We craft luxury packaging, print materials,
          and brand visuals for businesses that want
          to stand out.
        </p>

        <Link
          to="/portfolio"
          className="main-btn"
        >
          Explore Work →
        </Link>

      </motion.div>

      <div className="hero-image-box">

        <img
          src="/images/hero.png"
          alt="Premium packaging showcase"
        />

      </div>

      <div className="image-shadow shadow-one"></div>

      <div className="image-shadow shadow-two"></div>

      <div className="curve"></div>

    </section>

  );
}

export default Hero;