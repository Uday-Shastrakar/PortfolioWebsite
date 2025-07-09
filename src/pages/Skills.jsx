const skillCategories = {
  "Languages": [
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Kotlin", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  ],
  "Frameworks & Libraries": [
    { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "Hibernate", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-plain.svg" },
    { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Vue.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
    { name: "AngularJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
    { name: "ExtJS", src: "https://www.sencha.com/wp-content/uploads/2023/07/hero-center-img.svg" },
    { name: "Tailwind CSS", src: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" },
  ],
  "Databases": [
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MSSQL", src: "https://icon.icepanel.io/Technology/svg/Microsoft-SQL-Server.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  ],
  "DevOps & Tools": [
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Jenkins", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Bitbucket", src: "https://cdn.prod.website-files.com/657639ebfb91510f45654149/67f6a2054d7c4a557e026a06_44_Bitbucket_logo_logos-512.png" },
    { name: "Postman", src: "https://icon.icepanel.io/Technology/svg/Postman.svg" },
    { name: "Swagger", src: "https://icon.icepanel.io/Technology/svg/Swagger.svg" },
    { name: "JUnit", src: "https://icon.icepanel.io/Technology/svg/JUnit.svg" },
    { name: "Cucumber", src: "https://icon.icepanel.io/Technology/svg/Cucumber.svg" },
    { name: "Portainer", src: "https://icon.icepanel.io/Technology/svg/Portainer.svg" }
  ],
  "Architecture & Messaging": [
    { name: "Kafka", src: "https://icon.icepanel.io/Technology/svg/Apache-Kafka.svg" },
    { name: "RabbitMQ", src: "https://icon.icepanel.io/Technology/svg/RabbitMQ.svg" },
    { name: "REST APIs", src: "https://icon.icepanel.io/Technology/svg/OpenAPI.svg" },
    { name: "Microservices", src: "https://code.kx.com/insights/1.3/microservices/img/microservice_icon.png" },
  ],
  "Project & OS": [
    { name: "Jira", src: "https://icon.icepanel.io/Technology/svg/Jira.svg" },
    { name: "Confluence", src: "https://icon.icepanel.io/Technology/svg/Confluence.svg" },
    { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Windows", src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg" },
    { name: "iOS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" }
  ],
};

const Skills = () => {
  return (
    <section className="pt-28 pb-16 px-4 bg-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-center underline mb-12 text-gray-900">
        My Tech Stack
      </h1>
      <div className="max-w-7xl mx-auto space-y-12">
        {Object.entries(skillCategories).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
              {items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center space-y-2 hover:scale-105 transition"
                >
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                    title={skill.name}
                  />
                  <p className="text-xs text-gray-700 text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
