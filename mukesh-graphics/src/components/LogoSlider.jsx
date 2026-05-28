import "./LogoSlider.css";

function LogoSlider() {
  const logos = ["Nike", "Adidas", "Puma", "Apple", "Spotify", "HubSpot", "Auping"];

  return (
    <section className="logo-slider">
      <div className="logo-title">
        <span></span>
        <h3>TRUSTED BY MODERN BRANDS</h3>
        <span></span>
      </div>

      <div className="logo-slider-wrap">
        <div className="logo-track">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div className="logo-card" key={index}>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSlider;