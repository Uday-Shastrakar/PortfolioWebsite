import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="pt-32 pb-24 px-4 min-h-screen">
      <div className="glass max-w-5xl mx-auto p-8 md:p-16 rounded-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          About <span className="text-orange-500">Me</span>
        </h2>

        <div className="space-y-8 text-lg text-slate-300 leading-loose">
          <p>
            Hello! I'm <strong className="text-white">Uday Shastrakar</strong>, a Software Developer focused on backend engineering and real-time systems. I enjoy understanding how systems work internally, including dependency injection, database transaction flows, and performance optimization.
          </p>

          <p>
            I primarily work with <strong className="text-orange-500">Java</strong>, <strong className="text-orange-500">Spring Boot</strong>, and microservice architectures. Recently, I've expanded my expertise into <strong className="text-orange-500">FastAPI</strong> and real-time streaming applications.
          </p>

          <div className="glass-dark p-8 rounded-2xl border-l-4 border-orange-500 my-10">
            <h3 className="text-xl font-bold text-white mb-4">Current Focus: Options Intelligence Platform</h3>
            <p className="text-slate-400">
              I have been building a real-time options analytics platform that processes market data streams 
              and provides actionable trading insights using WebSockets and interactive visualizations.
            </p>
          </div>

          <p>
            With experience at <strong className="text-white">Manifest Health (Atlas Primary)</strong> and <strong className="text-white">Velotech Solutions</strong>, I have developed a strong foundation in building scalable REST APIs, designing optimized database schemas (MySQL, MongoDB), and implementing CI/CD pipelines with Docker and Jenkins.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Core Competencies</h3>
              <ul className="space-y-3">
                {["Backend Systems Architecture", "Microservices Design", "Real-time Data Streaming", "Database Optimization", "CI/CD Implementation"].map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-slate-400">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Education & Training</h3>
              <ul className="space-y-3">
                <li className="text-slate-400">BCA - Gondwana University</li>
                <li className="text-slate-400">Java Full Stack Development - Seed Infotech</li>
                <li className="text-slate-400">Microservices Masterclass - Udemy</li>
              </ul>
            </div>
          </div>

          <p className="text-center pt-10">
            <Link to="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl shadow-xl shadow-orange-500/20 hover:scale-105 transition-all">
              Let's build something together
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
