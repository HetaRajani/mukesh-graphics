import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-badge">
            Premium Packaging • Printing • Branding
          </div>

         <h1>
  Premium Printing & <br />
  Packaging Solutions <br />
  for <span>Your Brand</span>
</h1>
          <p>
            We create high-quality packaging, print materials, and branding
            designs that help businesses look professional, premium, and
            unforgettable.
          </p>

          <div className="hero-buttons">
            <Link to="/portfolio" className="primary-btn">
              Explore Work →
            </Link>

            <Link to="/request-quote" className="secondary-btn">
              Request Quote
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img src="/images/hero-packaging.png" alt="Premium Packaging" />
        </div>
      </div>
    </section>
  );
}

export default Hero;