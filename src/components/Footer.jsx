import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-5 border bg-gray-100 flex justify-between flex-wrap px-6 md:px-24">
      <p>©2025 Uday Shastrakar <span>All Rights Reserved</span></p>
      <div className="space-x-4">
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link to="/licensing" className="hover:underline">Licensing</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </div>
  );
};

export default Footer;
