import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 glass-dark border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
        <p>© 2026 <span className="text-white font-bold">Uday Shastrakar</span>. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/about" className="hover:text-orange-500 transition">About</Link>
          <Link to="/privacy" className="hover:text-orange-500 transition">Privacy Policy</Link>
          <Link to="/licensing" className="hover:text-orange-500 transition">Licensing</Link>
          <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
