import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

import "./PortfolioPage.css";

function PortfolioPage() {
  return (
    <div className="portfolio-page">

      {/* HEADER */}
      <Header />

      {/* PORTFOLIO */}
      <Portfolio showButton={false} />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default PortfolioPage;