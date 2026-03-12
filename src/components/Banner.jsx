import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import bannerImage from "../assets/uday3.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Backend Engineer",
        "Java Developer",
        "Spring Boot Expert",
        "Real-time Systems",
        "FastAPI Developer",
      ],
      startDelay: 300,
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="relative text-white w-full px-4 md:px-10 pt-20 md:pt-32 pb-20 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 opacity-40 z-0"
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900 to-slate-900 z-0"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-medium text-orange-400">Hi, I am</h3>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Uday <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Shastrakar</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-slate-300">
              <span className="font-bold text-white border-b-2 border-orange-500" ref={el}></span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-400 max-w-xl mx-auto md:mx-0">
              Building scalable backend systems and real-time applications. 
              Specializing in cloud-native architectures and high-performance data processing.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4">
            {[
              { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/uday-shastrakar", color: "hover:bg-[#0077b5]" },
              { icon: <FaGithub />, url: "https://github.com/Uday-Shastrakar", color: "hover:bg-[#333]" },
              { icon: <FaInstagram />, url: "https://www.instagram.com/uday_shastrakar/", color: "hover:bg-[#e4405f]" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex justify-center items-center rounded-2xl glass transition-all duration-300 transform hover:-translate-y-2 text-2xl ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl font-bold shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center relative">
          <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full animate-pulse"></div>
          <div className="relative p-2 glass rounded-full animate-float">
            <img
              src={bannerImage}
              alt="Uday Shastrakar"
              className="rounded-full w-72 h-72 md:w-[450px] md:h-[450px] object-cover border-4 border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
