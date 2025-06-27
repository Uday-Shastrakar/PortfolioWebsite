import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-[88vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold underline mb-8">
          Contact Me
        </h1>

        {/* Greeting Box */}
        <div className="border-2 border-orange-400 bg-orange-50 rounded-xl p-6 md:p-8 mb-10 shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Let’s Connect!
          </h2>
          <p className="text-gray-700 text-lg">
            Whether you want to collaborate, have a question, or just want to say hi — 
            I’m always open to meaningful conversations and opportunities. Don’t hesitate to reach out!
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg text-gray-800 text-left">
          {/* Left */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500 text-2xl" />
              <a
                href="mailto:uday.shastrakar@gmail.com"
                className="text-blue-600 underline"
              >
                uday.shastrakar@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-orange-500 text-2xl" />
              <div>
                <p>+91 8668713992</p>
                <p>+91 8149904347</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-orange-500 text-2xl" />
              <a
                href="https://www.linkedin.com/in/uday-shastrakar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-orange-500 text-2xl" />
              <a
                href="https://github.com/Uday-Shastrakar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                github.com/Uday-Shastrakar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
