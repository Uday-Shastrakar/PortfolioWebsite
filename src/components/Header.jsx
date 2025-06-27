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
    <header className="bg-gray-100 w-full fixed top-0 z-50 shadow">
      <div className="flex justify-between items-center px-6 md:px-16 h-20">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              className="hover:text-orange-500 font-medium"
            >
              {link.title}
            </Link>
          ))}
          <a
            href={actionButton.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-orange-500 text-white shadow rounded-full text-sm font-semibold hover:bg-orange-600 transition"
          >
            {actionButton.title}
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-gray-100">
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              className="block hover:text-orange-500 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <a
            href={actionButton.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {actionButton.title}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
