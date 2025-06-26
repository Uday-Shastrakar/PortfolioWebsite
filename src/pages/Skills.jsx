// src/pages/Skills.jsx
import {
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
  FaJenkins,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiKotlin,
  SiJavascript,
  SiTypescript,
  SiSpring,
  SiHibernate,
  SiAngular,
  SiVuedotjs,
  SiTailwindcss,
  SiPostman,
  SiMysql,
  SiRabbitmq,
  SiApachekafka,
  SiSwagger,
  SiConfluence,
  SiJira,
  SiLinux,
} from "react-icons/si";

const skillCategories = {
  "Languages": [
    { name: "Java", icon: <FaJava /> },
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "SQL" }, // No specific icon
  ],
  "Frameworks & Libraries": [
    { name: "Spring Boot", icon: <SiSpring /> },
    { name: "Spring MVC", icon: <SiSpring /> },
    { name: "Hibernate", icon: <SiHibernate /> },
    { name: "Django" }, // No icon
    { name: "React", icon: <FaReact /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "ExtJS" }, // No icon
  ],
  "Frontend & Styling": [
    { name: "Vue.js", icon: <SiVuedotjs /> },
    { name: "AngularJS", icon: <SiAngular /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML/CSS" }, // No icons needed
  ],
  "Web & Messaging": [
    { name: "RESTful APIs" }, // Descriptive only
    { name: "Microservices Architecture" },
    { name: "Kafka", icon: <SiApachekafka /> },
    { name: "RabbitMQ", icon: <SiRabbitmq /> },
  ],
  "Database & DevOps": [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Liquibase" }, // No icon
    { name: "Flyway" }, // No icon
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes" }, // Add manually if needed
    { name: "Jenkins", icon: <FaJenkins /> },
  ],
  "Testing & Docs": [
    { name: "JUnit" },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Cucumber" },
    { name: "Swagger", icon: <SiSwagger /> },
  ],
  "Tools & OS": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Confluence", icon: <SiConfluence /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Windows" },
    { name: "iOS" },
  ],
};

const Skills = () => {
  return (
    <div className="pt-28 pb-16 px-4 bg-white min-h-screen">
      <h1 className="text-5xl font-bold text-center underline mb-10 text-gray-900">My Skills</h1>
      <div className="max-w-6xl mx-auto space-y-12">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{category}</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition cursor-pointer"
                >
                  {skill.icon && <span className="text-lg">{skill.icon}</span>}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
