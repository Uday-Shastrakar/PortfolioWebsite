import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5 border-t bg-gray-100 flex flex-col md:flex-row justify-between items-center flex-wrap px-6 md:px-24 text-sm text-gray-700">
      <p className="mb-2 md:mb-0">©2025 Uday Shastrakar <span>All Rights Reserved</span></p>
      <div className="space-x-4">
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link to="/licensing" className="hover:underline">Licensing</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;
