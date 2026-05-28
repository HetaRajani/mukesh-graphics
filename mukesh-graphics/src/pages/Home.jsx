import Header from "../components/Header";
import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <Hero />

      <LogoSlider />

      {/* SERVICES SECTION */}
      <div id="services">
        <Services />
      </div>

      {/* ABOUT SECTION */}
      <div id="about">
        <About />
      </div>

      {/* PORTFOLIO SECTION */}
      <div id="portfolio">
        <Portfolio />
      </div>

      {/* CONTACT SECTION */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default Home;