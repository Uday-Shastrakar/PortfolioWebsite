import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ... your imports

function App() {
  return (
    <Router basename="/PortfolioWebsite"> {/* Add basename here */}
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
        <Route path="/licensing" element={<Licensing />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;