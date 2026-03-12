const ProjectsSection = () => {
  const projects = [
    {
      name: "Online Banking Microservices System",
      desc: "A backend banking simulation system built using microservice architecture.",
      features: ["Account management services", "Transaction processing APIs", "REST-based architecture", "Layered backend design"],
      tech: ["Java", "Spring Boot", "Microservices", "MySQL"]
    },
    {
      name: "Exam Portal",
      desc: "A full-stack online examination system for creating and managing exams.",
      features: ["Admin exam creation", "Student exam interface", "Timer-based exams", "Automatic result evaluation"],
      tech: ["Spring Boot", "React", "MySQL"]
    },
    {
      name: "Face Recognition System",
      desc: "A computer vision application capable of detecting and recognizing faces in real time.",
      features: ["Real-time face detection", "Face recognition using trained encodings"],
      tech: ["Python", "OpenCV", "face_recognition"]
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Core <span className="text-orange-500">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass p-8 rounded-[2rem] hover:border-orange-500/30 transition-all group flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                {project.name}
              </h3>
              <p className="text-slate-400 mb-6 flex-grow">{project.desc}</p>
              
              <ul className="mb-8 space-y-2 text-sm text-slate-500">
                {project.features.map(f => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 glass-dark rounded-lg text-xs text-slate-300">
                    {t}
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

export default ProjectsSection;
