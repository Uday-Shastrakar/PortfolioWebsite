
const Portfolio = () => {
  const projects = [
    {
      name: "Survey Data Collection Platform",
      description:
        "A healthcare research tool built using Java, Kotlin, Spring Boot, Hibernate, MySQL, Docker, and Jenkins. Includes REST APIs, Liquibase, and Bitbucket CI/CD integration.",
      tech: ["Java", "Kotlin", "Spring Boot", "MySQL", "Docker", "Jenkins"],
    },
    {
      name: "Exam Portal",
      description:
        "A full-stack web application built during certification, used to manage online exams with student/admin roles and performance tracking.",
      tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML/CSS", "JavaScript"],
    },
  ];

  return (
    <div className="pt-28 pb-16 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-bold text-center underline mb-12 text-gray-900">Portfolio</h1>
      <div className="max-w-5xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3 py-1 bg-slate-300 rounded-full hover:bg-orange-500 hover:text-white transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
