import { FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Online Banking Microservices System",
      desc: "A backend banking simulation system built using microservice architecture.",
      tech: ["Java", "Spring Boot", "Microservices", "MySQL"],
      github: "https://github.com/Uday-Shastrakar",
      preview: "🏦"
    },
    {
      name: "Exam Portal",
      desc: "A full-stack online examination system for creating and managing exams.",
      tech: ["Spring Boot", "React", "MySQL"],
      github: "https://github.com/Uday-Shastrakar",
      preview: "📝"
    },
    {
      name: "Face Recognition System",
      desc: "A computer vision application capable of detecting and recognizing faces in real time.",
      tech: ["Python", "OpenCV", "face_recognition"],
      github: "https://github.com/Uday-Shastrakar",
      preview: "👤"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center">
          Projects <span className="text-orange-500">& Labs</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="glass p-8 rounded-[2.5rem] hover:border-orange-500/30 transition-all group flex flex-col bg-slate-900/40">
              <div className="w-full aspect-video glass-dark rounded-2xl mb-8 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-500">
                {project.preview}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                {project.name}
              </h3>
              <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 glass-dark rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5">
                <a 
                  href={project.github} 
                  target="_blank"
                  className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors font-bold text-sm"
                >
                  <FaGithub size={18} /> View Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
