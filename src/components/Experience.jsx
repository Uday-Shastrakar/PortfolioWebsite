const Experience = () => {
  return (
    <section className="py-24 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Work <span className="text-orange-500">Experience</span>
        </h2>

        <div className="space-y-12">
          {/* Manifest Health */}
          <div className="glass p-8 rounded-3xl hover:border-orange-500/30 transition-all duration-500 group">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                  Software Developer
                </h3>
                <p className="text-orange-500 font-medium mt-1">Manifest Health (Atlas Primary)</p>
              </div>
              <span className="px-4 py-1 glass-dark rounded-full text-sm text-slate-400">
                Jun 2023 – Mar 2024
              </span>
            </div>
            
            <p className="text-slate-300 mb-6 italic">Worked on backend services for a healthcare survey data collection platform used in research studies.</p>

            <ul className="space-y-3 text-slate-400 mb-8 list-none">
              {[
                "Developed REST APIs using Spring Boot",
                "Designed database schemas using MySQL and MongoDB",
                "Implemented backend services for data processing",
                "Worked with Docker and Jenkins for CI/CD"
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "MySQL", "MongoDB", "Docker", "Jenkins"].map((tech) => (
                  <span key={tech} className="px-3 py-1 glass-dark rounded-lg text-xs text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slate-600 bg-black/20 px-3 py-1 rounded-full border border-white/5">
                Note: Source code cannot be shared due to company confidentiality
              </p>
            </div>
          </div>

          {/* Velotech Solutions */}
          <div className="glass p-8 rounded-3xl hover:border-orange-500/30 transition-all duration-500 group">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                  Software Engineer Intern
                </h3>
                <p className="text-orange-500 font-medium mt-1">Velotech Solutions</p>
              </div>
              <span className="px-4 py-1 glass-dark rounded-full text-sm text-slate-400">
                Jan 2023 – May 2023
              </span>
            </div>
            
            <ul className="space-y-3 text-slate-400 mb-8 list-none">
              {[
                "Built backend modules using Spring Boot and Hibernate.",
                "Wrote optimized SQL queries and maintained database logic.",
                "Developed frontend functionality using ExtJS.",
                "Tested REST endpoints and integrated backend with frontend features."
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/5">
              <p className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "Hibernate", "MsSQL", "SQL", "ExtJS", "SVN"].map((tech) => (
                  <span key={tech} className="px-3 py-1 glass-dark rounded-lg text-xs text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
