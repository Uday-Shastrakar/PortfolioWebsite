// src/App.jsx
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


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <About />
              <Services />
              <Expertise />
        
              
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/licensing" element={<Licensing/>} />
        <Route path="/skills" element={<Skills />}/>
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
