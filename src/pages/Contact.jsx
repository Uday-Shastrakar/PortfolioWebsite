import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi"; // ✅ New phone icon

const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
          Get In <span className="text-orange-500">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Greeting */}
          <div className="space-y-8 animate-fadeIn">
            <div className="glass p-10 rounded-3xl border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-white mb-4">Let’s Connect!</h3>
              <p className="text-slate-400 text-lg leading-loose">
                Whether you want to collaborate on a project, have a technical question, or just want to say hi — 
                I’m always open to meaningful conversations and new opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="glass-dark p-6 rounded-2xl flex items-center gap-6 group hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500">
                  <FiPhoneCall size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Call Me</p>
                  <p className="text-slate-200">+91 8668713992</p>
                </div>
              </div>
              
              <div className="glass-dark p-6 rounded-2xl flex items-center gap-6 group hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email Me</p>
                  <a href="mailto:uday.shastrakar@gmail.com" className="text-slate-200 hover:text-orange-500 transition-colors">
                    uday.shastrakar@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Socials */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Social Profiles</h3>
            <div className="grid gap-4">
              <a
                href="https://www.linkedin.com/in/uday-shastrakar"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 rounded-2xl flex items-center justify-between group hover:border-orange-500/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-orange-500 text-3xl" />
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors">LinkedIn</span>
                </div>
                <div className="text-slate-600 group-hover:text-orange-500 transition-colors">→</div>
              </a>

              <a
                href="https://github.com/Uday-Shastrakar"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 rounded-2xl flex items-center justify-between group hover:border-orange-500/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <FaGithub className="text-orange-500 text-3xl" />
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors">GitHub</span>
                </div>
                <div className="text-slate-600 group-hover:text-orange-500 transition-colors">→</div>
              </a>
            </div>

            <div className="mt-12 glass-dark p-8 rounded-3xl text-center border border-white/5">
              <p className="text-slate-500 text-sm">Pune, Maharashtra, India</p>
              <div className="w-12 h-1 bg-orange-500 mx-auto mt-4 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
