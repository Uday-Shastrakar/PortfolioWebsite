const skillCategories = {
  "Backend": [
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Kotlin", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
    { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" }
  ],
  "Frontend": [
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", src: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" },
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" }
  ],
  "Databases": [
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" }
  ],
  "DevOps": [
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Jenkins", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" }
  ],
  "Tools": [
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Postman", src: "https://icon.icepanel.io/Technology/svg/Postman.svg" }
  ]
};

const Skills = () => {
  return (
    <section className="pt-32 pb-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-white">
          Technical <span className="text-orange-500">Arsenal</span>
        </h2>

        <div className="space-y-20">
          {Object.entries(skillCategories).map(([category, items]) => (
            <div key={category} className="space-y-8">
              <h3 className="text-2xl font-bold text-white/80 border-l-4 border-orange-500 pl-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8">
                {items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="glass p-6 rounded-3xl flex flex-col items-center justify-center space-y-4 hover:border-orange-500/30 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
