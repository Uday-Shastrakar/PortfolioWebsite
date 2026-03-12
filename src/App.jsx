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
import Experience from "./components/Experience";
import FeaturedProject from "./components/FeaturedProject";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./pages/Contact";

function App() {
  const basename = import.meta.env.DEV ? "/" : "/PortfolioWebsite";

  return (
    <div className="flex flex-col min-h-screen">
      <Router basename={basename}>
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <FeaturedProject />
                  <ProjectsSection />
                  <Experience />
                  <Expertise />
                  <ContactSection />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
