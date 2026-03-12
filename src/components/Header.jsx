import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Important

const Header = () => {
  const [brandName] = useState("Uday Shastrakar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuLinks = [
    { title: "Home", link: "/", id: 1 },
    { title: "About", link: "/about", id: 2 },
    { title: "Skills", link: "/skills", id: 3 },
    { title: "Portfolio", link: "/portfolio", id: 4 },
    { title: "Contact", link: "/contact", id: 5 },
  ];

  const actionButton = {
    title: "Download CV",
    link: "https://rxresu.me/uday.shastrakar/uday-shastrakar-java-profile",
  };

  return (
    <header className="w-full fixed top-0 z-50 glass-dark border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 h-20">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            {brandName}
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              className="text-gray-300 hover:text-orange-500 font-medium transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
          <a
            href={actionButton.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300"
          >
            {actionButton.title}
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-gray-100 p-2 hover:bg-white/10 rounded-lg transition"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full glass-dark transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-6 py-8 space-y-6">
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              className="block text-xl text-gray-300 hover:text-orange-500 font-medium transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <a
            href={actionButton.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-lg font-semibold shadow-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
