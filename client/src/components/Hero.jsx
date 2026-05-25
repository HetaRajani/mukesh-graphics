import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-dot-pattern"></div>

      <div className="hero-content">
        <p className="tag">
          Premium Packaging • Printing • Branding
        </p>

        <h1>
          Designing Packaging <br />
          That Makes Brands <br />
          <span>Unforgettable</span>
        </h1>

        <p className="subtitle">
          We craft luxury packaging, print materials, and brand visuals for
          businesses that want to stand out.
        </p>

        <Link to="/portfolio" className="main-btn">
          Explore Work →
        </Link>
      </div>

      <div className="hero-image-box">
        <img
          src="/images/hero-light.png"
          alt="Premium packaging showcase"
        />
      </div>

      <div className="hero-curve"></div>
    </section>
  );
}

export default Hero;