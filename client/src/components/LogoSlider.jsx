import "./LogoSlider.css";

function LogoSlider() {
  const logos = ["Nike", "Adidas", "Puma", "Apple", "Spotify", "HubSpot", "Auping"];

  return (
    <section className="logo-section">
      <p>Trusted by modern brands</p>

      <div className="logo-marquee">
        <div className="logo-track">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <span key={index}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSlider;