import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const FeaturedProject = () => {
  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Featured Project</h2>
        <div className="glass p-8 md:p-12 rounded-[2.5rem] flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              StrikeIQ — Real-Time Options Intelligence Platform
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              A real-time trading analytics platform designed to process live market data streams and generate insights for options trading.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Real-time market data streaming using WebSockets",
                "Option chain analytics",
                "Strike intelligence insights",
                "Interactive chart visualization"
              ].map((feature) => (
                <div key={feature} className="flex gap-3 text-slate-400">
                  <span className="text-orange-500">✔</span> {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {["FastAPI", "React", "WebSockets", "Python"].map((tech) => (
                <span key={tech} className="px-4 py-1.5 glass-dark rounded-xl text-xs font-bold text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-6">
              <a 
                href="https://github.com/Uday-Shastrakar" 
                target="_blank"
                className="inline-flex items-center gap-2 text-white hover:text-orange-500 transition-colors font-bold"
              >
                <FaGithub size={20} /> View on GitHub <FaExternalLinkAlt size={14} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full aspect-video bg-gradient-to-br from-orange-500/20 to-slate-800 rounded-3xl border border-white/5 flex items-center justify-center p-8 group">
             <div className="text-center space-y-4">
                <div className="text-6xl text-orange-500 opacity-50 group-hover:scale-110 transition-transform">📊</div>
                <p className="text-slate-500 font-mono text-sm">StrikeIQ Terminal Simulator</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
