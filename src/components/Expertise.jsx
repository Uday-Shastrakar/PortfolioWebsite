import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa"; // Import icon
import bannerBackground from "../assets/banner_wallpaper.svg";
import resumePDF from "../assets/resume.pdf";

const Expertise = () => {
  return (
    <section className="py-24 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          My <span className="text-orange-500">Expertise</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-white">I Love These Technologies</h3>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I specialize in architecting scalable backend services using Java/Kotlin ecosystem 
              and crafting high-performance user interfaces with modern web standards.
              My goal is to build software that is both elegant and efficient.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl shadow-xl shadow-orange-500/20 hover:scale-105 transition-all"
              >
                Hire Me
              </Link>
              <a
                href={resumePDF}
                download="Uday_Shastrakar_Resume.pdf"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
              >
                Resume <FaDownload />
              </a>
            </div>
          </div>

          {/* Right Column - Tech Tags */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                "Core Java", "Kotlin", "Spring Boot", "Spring Security", "Hibernate",
                "ReactJs", "Vue.js", "Tailwind CSS", "MySQL", "PostgreSQL", 
                "Docker", "Jenkins", "Kafka", "AWS Cloud", "REST APIs"
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-5 py-2 glass text-slate-300 rounded-xl text-sm font-medium hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
