import { useState } from "react";
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [brandName] = useState("Uday Shastrakar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuLinks = [
    { title: "Home", link: "/", icon: <FaHome />, id: 1 },
    { title: "About", link: "/about", icon: <FaUser />, id: 2 },
    { title: "Skills", link: "/skills", icon: <FaCode />, id: 3 },
    { title: "Portfolio", link: "/portfolio", icon: <FaBriefcase />, id: 4 },
    { title: "Contact", link: "/contact", icon: <FaEnvelope />, id: 5 },
  ];

  const location = useLocation();

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

        {/* Desktop Menu - Keep as is */}
        <nav className="hidden md:flex space-x-8 items-center">
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              className={`font-medium transition-colors duration-300 ${
                location.pathname === link.link ? 'text-orange-500' : 'text-gray-300 hover:text-orange-500'
              }`}
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
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 h-16 glass-dark border border-white/10 rounded-2xl flex items-center justify-around px-2 z-[60] shadow-2xl backdrop-blur-xl">
        {menuLinks.map((link) => {
          const isActive = location.pathname === link.link;
          return (
            <Link
              key={link.id}
              to={link.link}
              className={`flex flex-col items-center justify-center space-y-1 w-full h-full rounded-xl transition-all duration-300 ${
                isActive ? 'text-orange-500 scale-110' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className={`text-lg transition-transform ${isActive ? 'drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]' : ''}`}>
                {link.icon}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                {link.title}
              </span>
              {isActive && (
                <div className="absolute -bottom-1 w-1 h-1 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
