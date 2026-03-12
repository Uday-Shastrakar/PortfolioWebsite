const Portfolio = () => {
  const projects = [
    {
      name: "Survey Data Collection Platform (Atlas Primary)",
      description: `Developed at Atlas Primary, this platform streamlined healthcare research and survey workflows.
Built using Java, Kotlin, Spring Boot, Hibernate, and MySQL.
Kafka enabled distributed messaging, while Jenkins and Docker powered CI/CD pipelines.
Database versioning was handled with Liquibase and Flyway.
Collaborated using Bitbucket, Jira, and Confluence for code, tracking, and documentation.`,
      tech: [
        "Java", "Kotlin", "Spring Boot", "Hibernate", "MySQL",
        "Kafka", "Liquibase", "Flyway", "Docker", "Jenkins",
        "REST APIs", "Bitbucket", "Jira", "Confluence"
      ],
      type: "Professional",
      link: "#",
    },
    {
      name: "Exam Portal (Academic Project)",
      description: `Built as part of a full stack Java certification program.
Features student/admin login, exam scheduling, performance tracking, and question bank management.
Spring Boot and Hibernate were used for backend with MySQL DB and a custom frontend using HTML/CSS/JS.`,
      tech: [
        "Java", "Spring Boot", "Hibernate", "MySQL",
        "JavaScript", "HTML", "CSS"
      ],
      type: "Academic",
      link: "#",
    },
    {
      name: "Face Recognition System (Personal Project)",
      description: `Python-based face recognition system using OpenCV and LBPH algorithm.
Supports storing face data, scanning via external camera, and real-time recognition from a distance.
Great for attendance systems or secure login workflows.`,
      tech: [
        "Python", "OpenCV", "LBPH", "NumPy", "Real-time Camera"
      ],
      type: "Personal",
      link: "#",
    },
    {
      name: "Blogging Platform using Django (Personal Project)",
      description: `A feature-rich blog web app built using Python Django.
Includes user login/signup, post creation/edit/delete, commenting system, and custom admin dashboard.
Uses Django ORM and templates with a clean responsive UI.`,
      tech: [
        "Python", "Django", "SQLite", "HTML", "CSS", "Django Admin"
      ],
      type: "Personal",
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
