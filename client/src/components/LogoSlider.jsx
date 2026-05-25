import "./LogoSlider.css";

function LogoSlider() {

  const logos = [
    "Nike",
    "Adidas",
    "Puma",
    "Apple",
    "Spotify",
    "HubSpot",
    "Auping",
  ];

  return (

    <section className="logo-slider">

      <h3>
        Trusted by modern brands
      </h3>

      <div className="logo-track">

        {[...logos, ...logos, ...logos].map((logo, index) => (

          <span key={index}>
            {logo}
          </span>

        ))}

      </div>

    </section>
  );
}

export default LogoSlider;