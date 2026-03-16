const Portfolio = () => {
  const projects = [
    {
      name: "Options Intelligence Platform",
      description: `This is a real-time options analytics platform that processes live market data and provides insights for options trading.
Key Features:
- Real-time market data streaming using WebSockets.
- Professional option chain analysis & strike intelligence.
- Interactive chart visualization for trader insights.`,
      tech: ["FastAPI", "React", "WebSockets", "Python", "Tailwind CSS"],
      type: "Featured",
      link: "#",
    },
    {
      name: "Face Recognition System",
      description: `A computer vision application that detects and recognizes faces in real time using OpenCV and Python. Supports real-time camera feeds and biometric registration.`,
      tech: ["Python", "OpenCV", "face_recognition", "NumPy"],
      type: "Personal",
      link: "#",
    },
    {
      name: "Exam Portal",
      description: `A full-stack online examination system featuring administrative control for test management and timed student assessments with automated grading.`,
      tech: ["Spring Boot", "React", "MySQL", "Hibernate"],
      type: "Academic",
      link: "#",
    },
  ];

  return (
    <section className="pt-32 pb-24 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
          My <span className="text-orange-500">Portfolio</span>
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl hover:border-orange-500/30 transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                  {project.name}
                </h3>
                <span className="text-xs font-semibold tracking-wider uppercase px-4 py-1 glass-dark text-orange-400 rounded-full border border-orange-500/20">
                  {project.type}
                </span>
              </div>
              
              <p className="text-slate-400 mb-8 whitespace-pre-line leading-loose text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 glass-dark text-slate-400 rounded-lg hover:text-orange-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/20 hover:scale-105 transition-all"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
