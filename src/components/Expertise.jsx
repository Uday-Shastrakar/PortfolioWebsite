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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              category: "Backend", 
              skills: ["Java", "Kotlin", "Spring Boot", "FastAPI"] 
            },
            { 
              category: "Frontend", 
              skills: ["React", "JavaScript", "HTML", "CSS"] 
            },
            { 
              category: "Databases", 
              skills: ["MySQL", "MongoDB"] 
            },
            { 
              category: "DevOps", 
              skills: ["Docker", "Jenkins"] 
            },
            { 
              category: "Tools", 
              skills: ["Git", "Linux", "Postman"] 
            },
          ].map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-[2rem] hover:border-orange-500/30 transition-all group">
              <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-1.5 glass-dark rounded-xl text-xs font-bold text-slate-400 group-hover:text-slate-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
