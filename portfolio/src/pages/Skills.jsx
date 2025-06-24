

const Skills = () => {
  const categories = {
    "Languages": ["Core Java", "Kotlin", "J2EE", "SQL"],
    "Frameworks & Libraries": ["Spring Boot", "Spring Security", "Hibernate", "React.js", "AngularJS"],
    "Tools & Platforms": ["Docker", "Jenkins", "Kafka", "MySQL", "Liquibase", "Flyway", "JUnit", "Postman", "Tailwind CSS"],
  };

  return (
    <div className="pt-28 pb-16 px-4 bg-white min-h-screen">
      <h1 className="text-5xl font-bold text-center underline mb-10 text-gray-900">My Skills</h1>
      <div className="max-w-4xl mx-auto space-y-12">
        {Object.entries(categories).map(([category, skills]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{category}</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="bg-slate-200 px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition cursor-pointer"
                >
                  {skill}
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
