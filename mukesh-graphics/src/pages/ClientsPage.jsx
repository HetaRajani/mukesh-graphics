import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ClientsPage.css";

function ClientsPage() {
  const brands = ["Zara", "Samsung", "Tesla", "Google", "Amazon"];

  return (
    <div className="clients-page">
      <Header />

      <section className="clients-section">
        <div className="clients-glow"></div>

        <p className="clients-label">OUR CLIENTS</p>
        <div className="clients-line"></div>

        <h1>
          Trusted By Brands <br />
          That Believe In <span>Premium Design</span>
        </h1>

        <p className="clients-subtitle">
          We work with ambitious businesses to create packaging, printing, and
          branding experiences that feel premium, memorable, and market-ready.
        </p>

        <div className="clients-stats">
          <div className="client-stat-card">
            <h3>120+</h3>
            <p>Brands Served</p>
          </div>

          <div className="client-stat-card">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="client-stat-card">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>

        <div className="brand-row">
          {brands.map((brand, index) => (
            <div className="brand-pill" key={index}>
              {brand}
            </div>
          ))}
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “PrintCraft helped us turn simple packaging into a luxury brand
              experience.”
            </p>
            <h4>Creative Director</h4>
          </div>

          <div className="testimonial-card active">
            <p>
              “Their quality, finishing, and attention to detail made our
              product look premium.”
            </p>
            <h4>Brand Manager</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “A modern, professional team for packaging, printing, and
              branding.”
            </p>
            <h4>Startup Founder</h4>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ClientsPage;