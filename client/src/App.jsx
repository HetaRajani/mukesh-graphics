import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import ClientsPage from "./pages/ClientsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RequestQuotePage from "./pages/RequestQuotePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/request-quote" element={<RequestQuotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;