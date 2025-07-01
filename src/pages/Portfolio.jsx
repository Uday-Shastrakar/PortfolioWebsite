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
    <div className="pt-28 pb-16 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-bold text-center underline mb-12 text-gray-900">
        Portfolio
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h2 className="text-2xl font-bold text-gray-800">{project.name}</h2>
              <span className="mt-2 md:mt-0 text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                {project.type}
              </span>
            </div>
            <p className="text-gray-700 mb-4 whitespace-pre-line leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3 py-1 bg-slate-300 rounded-full hover:bg-orange-500 hover:text-white transition"
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
                className="inline-block bg-orange-500 text-white px-4 py-2 text-sm rounded-full shadow hover:bg-orange-600 transition"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
