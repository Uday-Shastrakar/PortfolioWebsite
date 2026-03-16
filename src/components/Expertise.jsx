import { motion } from "framer-motion";
import ScrollReveal from "./utils/ScrollReveal";

const Expertise = () => {
  const expertiseData = [
    { 
      category: "Backend Development", 
      skills: ["Java", "Kotlin", "Spring Boot", "FastAPI", "Microservices", "REST APIs"],
      className: "md:col-span-1",
      icon: "⚙️",
      accent: "from-orange-500/20 to-transparent"
    },
    { 
      category: "Frontend", 
      skills: ["React", "Next.js", "JavaScript", "Tailwind"],
      className: "md:col-span-1",
      icon: "🎨",
      accent: "from-blue-500/20 to-transparent"
    },
    { 
      category: "Infrastructure", 
      skills: ["Docker", "Jenkins", "CI/CD", "AWS"],
      className: "md:col-span-1",
      icon: "🚀",
      accent: "from-purple-500/20 to-transparent"
    },
    { 
      category: "Data", 
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
      className: "md:col-span-1",
      icon: "💾",
      accent: "from-emerald-500/20 to-transparent"
    },
    { 
      category: "Core Tech", 
      skills: ["Git", "Linux", "Postman", "Agile"],
      className: "md:col-span-1",
      icon: "🛠️",
      accent: "from-slate-500/20 to-transparent"
    },
  ];

  return (
    <section className="py-24 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="text-orange-500">Expertise</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive look at the technologies and tools I use to build high-performance, scalable systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {expertiseData.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`glass group relative overflow-hidden p-5 rounded-2xl flex flex-col justify-between border border-white/5 hover:border-orange-500/20 transition-all ${item.className}`}
            >
              {/* Card Accent Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex justify-between items-start mb-3">
                <div className="space-y-0.5">
                  <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                    {item.category}
                  </h3>
                  <div className="w-5 h-0.5 bg-orange-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </div>
                <div className="text-xl grayscale group-hover:grayscale-0 transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              <div className="relative z-10 flex flex-wrap gap-1.5">
                {item.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-white/5 text-slate-300 border border-white/5 group-hover:border-orange-500/30 group-hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
