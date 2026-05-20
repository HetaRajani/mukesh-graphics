import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

function PortfolioPage() {
  return (
    <>
      <Header />
      <Portfolio showButton={false} />
      <Footer />
    </>
  );
}

export default PortfolioPage;