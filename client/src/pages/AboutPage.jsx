import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <Header />

      <section className="about-page">
        <div className="about-glow"></div>

        {/* HERO */}

        <div className="about-hero">

          <p className="about-label">
            ABOUT PRINTCRAFT
          </p>

          <h1>
            We Design Packaging
            <br />
            That Creates <span>Brand Impact</span>
          </h1>

          <p className="about-subtitle">
            PrintCraft is a premium packaging and branding studio focused on
            creating elegant, modern, and unforgettable visual experiences for
            ambitious brands.
          </p>

        </div>

        {/* STORY */}

        <div className="about-story">

          <div className="story-left">

            <h2>Our Story</h2>

            <p>
              We believe packaging is more than protection — it is the first
              impression of a brand.
            </p>

            <p>
              Our team combines creativity, strategy, printing expertise,
              and modern aesthetics to build packaging solutions that feel
              premium and memorable.
            </p>

            <p>
              From luxury boxes to branding systems, we create designs that
              elevate businesses and help products stand out in competitive
              markets.
            </p>

          </div>

          <div className="story-right">

            <div className="story-card">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="story-card dark-card">
              <h3>120+</h3>
              <p>Brands Served</p>
            </div>

            <div className="story-card">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div className="story-card">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>

          </div>

        </div>

        {/* VALUES */}

        <div className="values-section">

          <h2>Why Brands Choose Us</h2>

          <div className="values-grid">

            <div className="value-box">
              <h3>Premium Quality</h3>

              <p>
                We focus on details, finishing,
                materials and visual perfection.
              </p>
            </div>

            <div className="value-box">
              <h3>Modern Design</h3>

              <p>
                Minimalist and luxury aesthetics
                crafted for modern brands.
              </p>
            </div>

            <div className="value-box">
              <h3>Creative Strategy</h3>

              <p>
                We combine branding psychology
                with elegant visual storytelling.
              </p>
            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="about-cta">

          <h2>
            Let’s Build Something Premium Together
          </h2>

          <p>
            Packaging and branding solutions crafted
            for businesses that want to stand out.
          </p>

          <a href="/contact">
            Start Your Project →
          </a>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default AboutPage;