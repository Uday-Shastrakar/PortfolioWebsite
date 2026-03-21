import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { FaLinkedin, FaGithub, FaFileDownload, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollReveal from "./utils/ScrollReveal";
import Magnetic from "./utils/Magnetic";
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
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-medium text-orange-400">Hi, I am</h3>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                Uday <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">Shastrakar</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-light text-slate-300">
                <span className="font-bold text-white border-b-2 border-orange-500" ref={el}></span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-slate-400 max-w-xl mx-auto md:mx-0">
                Building scalable backend systems and real-time applications. <br />
                <span className="text-orange-500 font-semibold italic mt-2 block">
                  Currently building a real-time options analytics platform.
                </span>
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <Magnetic>
              <a 
                href="https://github.com/Uday-Shastrakar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 glass rounded-2xl flex items-center gap-2 hover:border-orange-500/50 transition-all font-bold text-sm"
              >
                <FaGithub size={18} /> GitHub
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="https://www.linkedin.com/in/uday-shastrakar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 glass rounded-2xl flex items-center gap-2 hover:border-orange-500/50 transition-all font-bold text-sm"
              >
                <FaLinkedin size={18} /> LinkedIn
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="https://rxresu.me/uday.shastrakar/uday-shastrakar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 glass border border-orange-500/20 rounded-2xl flex items-center gap-2 hover:bg-orange-500/10 transition-all font-bold text-sm text-orange-400"
              >
                <FaEye size={18} /> View Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="/assets/resume.pdf" 
                download
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:scale-105 transition-all text-sm"
              >
                <FaFileDownload size={18} /> Download Resume
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <ScrollReveal direction="right" delay={0.4}>
          <div className="flex justify-center relative">
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full"
            ></motion.div>
            <motion.div 
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative p-2 glass rounded-full"
            >
              <img
                src={bannerImage}
                alt="Uday Shastrakar"
                className="rounded-full w-72 h-72 md:w-[450px] md:h-[450px] object-cover border-4 border-white/10"
              />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Banner;
