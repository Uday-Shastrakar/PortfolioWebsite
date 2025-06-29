import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";

import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Licensing from "./pages/Licensing";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Experience from "./components/Experiance";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Layout wrapper for sticky footer */}
      <Router basename="/PortfolioWebsite">
        <Header />
        
        {/* Main content grows to fill remaining space */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <About />
                  <Experience/>
                  <Services />
                  <Expertise />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/licensing" element={<Licensing />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
          </Routes>
        </main>

        {/* Footer always sticks to bottom */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
