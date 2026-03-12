import { FaGithub, FaDatabase, FaStream, FaServer, FaBrain, FaChartLine, FaThLarge, FaMicrochip } from "react-icons/fa";
import strikeiqDash from "../assets/strikeiq-dashboard.png";

const FeaturedProject = () => {
  const arcSteps = [
    { name: "Broker API", icon: <FaDatabase /> },
    { name: "WebSockets", icon: <FaStream /> },
    { name: "FastAPI", icon: <FaServer /> },
    { name: "Analytics", icon: <FaMicrochip /> },
    { name: "AI/ML Models", icon: <FaBrain /> },
    { name: "Insights", icon: <FaChartLine /> },
    { name: "React Dash", icon: <FaThLarge /> }
  ];

  return (
    <section className="py-24 px-4 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Featured Project</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              StrikeIQ — <span className="text-orange-500 text-glow">AI-Powered</span> Real-Time Options Intelligence Platform
            </h3>
          </div>
          <a 
            href="https://github.com/Uday-Shastrakar" 
            target="_blank"
            className="px-6 py-3 glass rounded-2xl flex items-center gap-3 text-white hover:text-orange-500 transition-all font-bold group"
          >
            <FaGithub size={20} className="group-hover:rotate-12 transition-transform" /> 
            Source Code
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Dashboard Preview Area */}
          <div className="lg:col-span-7 group">
            <div className="glass p-4 rounded-[2.5rem] bg-slate-900/40">
              <div className="w-full aspect-[16/10] bg-slate-900 rounded-[2rem] overflow-hidden border border-white/5 relative shadow-2xl flex items-center justify-center">
                <img 
                  src={strikeiqDash} 
                  alt="StrikeIQ Dashboard" 
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-center text-slate-500 text-xs mt-4 font-medium italic text-balance">
                StrikeIQ Real-Time Options Intelligence Dashboard
              </p>
            </div>
          </div>

          {/* Features & Details */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                StrikeIQ is a real-time options analytics platform that integrates with <strong>live broker market data feeds</strong> to analyze option chain activity and generate trading insights.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-orange-500/30 pl-4">
                The system processes live market data streams using WebSockets, performs option chain analytics, and applies AI/ML models to detect trading patterns and generate intelligent signals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {[
                "Live broker market data integration",
                "Real-time market data streaming via WebSockets",
                "Option chain analytics and strike intelligence",
                "AI / ML based pattern detection",
                "Interactive trading dashboard"
              ].map((feature) => (
                <div key={feature} className="glass-dark p-4 rounded-2xl flex items-center gap-4 border border-white/5 hover:border-orange-500/20 transition-all">
                  <div className="w-6 h-6 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 text-xs">✔</div>
                  <span className="text-slate-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["FastAPI", "React", "WebSockets", "Python", "ML Models"].map((tech) => (
                <span key={tech} className="px-3 py-1 glass-dark rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mini Architecture Flow */}
        <div className="glass p-8 rounded-[2.5rem] bg-black/20 border border-white/5 overflow-x-auto">
          <h4 className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-10">System Architecture Flow</h4>
          <div className="flex lg:grid lg:grid-cols-7 gap-6 min-w-[800px] lg:min-w-0 relative">
            {arcSteps.map((step, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center group relative">
                {/* Connector Arrow (pulsing) */}
                {idx > 0 && (
                  <div 
                    className={`absolute -left-3 top-[24px] text-lg animate-arrow-flow font-bold ${idx % 2 === 0 ? 'text-green-400' : 'text-red-400'}`}
                    style={{ animationDelay: `${(idx - 1) * 0.4}s` }}
                  >
                    →
                  </div>
                )}
                
                <div 
                  className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-lg text-orange-500 mb-4 group-hover:text-white transition-all shadow-lg shadow-orange-500/5 animate-pulse-neon hover-orange-glow cursor-pointer"
                  style={{ animationDelay: `${idx * 0.4}s` }}
                >
                  {step.icon}
                </div>
                <p 
                  className="text-slate-400 text-[9px] font-bold uppercase tracking-widest text-center whitespace-nowrap group-hover:text-white transition-colors"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  {step.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
