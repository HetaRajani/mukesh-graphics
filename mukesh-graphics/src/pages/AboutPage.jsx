import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <Header />

      <section className="about-page">

        {/* HERO */}
        <section className="about-hero">

          <p className="about-hero-label">
            ABOUT MUKESH GRAPHICS
          </p>

          <div className="about-hero-line"></div>

          <h1>
            We Design Packaging
            <br />
            That Creates <span>Brand Impact</span>
          </h1>

          <p>
            Mukesh Graphics is a premium packaging and branding studio focused on
            creating elegant, modern, and unforgettable visual experiences
            for ambitious brands.
          </p>

        </section>

        {/* STORY */}
        <section className="about-story">

          <div className="story-left">

            <h2>Our Story</h2>

            <p>
              We believe packaging is more than protection —
              it is the first impression of a brand.
            </p>

            <p>
              Our team combines creativity, strategy,
              printing expertise, and modern aesthetics
              to build packaging solutions that feel
              premium and memorable.
            </p>

            <p>
              From luxury boxes to branding systems,
              we create designs that elevate businesses
              and help products stand out in competitive markets.
            </p>

          </div>

          <div className="about-stats-grid">

            <div className="about-stat-card">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="about-stat-card active">
              <h3>120+</h3>
              <p>Brands Served</p>
            </div>

            <div className="about-stat-card">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div className="about-stat-card">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>

          </div>

        </section>

        {/* WHY */}
        <section className="about-why">

          <h2>Why Brands Choose Us</h2>

          <div className="why-grid">

            <div className="why-card">
              <h3>Premium Quality</h3>

              <p>
                We focus on details, finishing,
                materials and visual perfection.
              </p>
            </div>

            <div className="why-card">
              <h3>Modern Design</h3>

              <p>
                Minimalist and luxury aesthetics
                crafted for modern brands.
              </p>
            </div>

            <div className="why-card">
              <h3>Creative Strategy</h3>

              <p>
                We combine branding psychology
                with elegant visual storytelling.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="about-cta">

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

        </section>

      </section>

      <Footer />
    </>
  );
}

export default AboutPage;