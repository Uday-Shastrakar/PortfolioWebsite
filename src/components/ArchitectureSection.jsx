import { FaDatabase, FaStream, FaServer, FaBrain, FaChartLine, FaLayout } from "react-icons/fa";

const ArchitectureSection = () => {
  const steps = [
    { name: "Market Data Feed", icon: <FaDatabase />, desc: "Live ticks from NYSE/NSE" },
    { name: "WebSocket Streaming", icon: <FaStream />, desc: "Lower latency transport" },
    { name: "FastAPI Backend", icon: <FaServer />, desc: "High-performance processing" },
    { name: "AI / ML Engine", icon: <FaBrain />, desc: "Pattern detection models" },
    { name: "Trading Insights", icon: <FaChartLine />, desc: "Actionable strike signals" },
    { name: "React Dashboard", icon: <FaLayout />, desc: "Real-time user interface" }
  ];

  return (
    <section className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center">
          System <span className="text-orange-500">Architecture</span> (StrikeIQ)
        </h2>

        <div className="relative">
          {/* Connector Line (visible on large screens) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center text-3xl text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-orange-500/10">
                  {step.icon}
                </div>
                <h3 className="text-white font-bold text-center mb-2 group-hover:text-orange-500 transition-colors">
                  {step.name}
                </h3>
                <p className="text-slate-500 text-xs text-center leading-relaxed">
                  {step.desc}
                </p>
                {/* Mobile Arrow */}
                {idx !== steps.length - 1 && (
                    <div className="lg:hidden mt-8 text-orange-500/30 text-2xl animate-bounce">
                        ↓
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
