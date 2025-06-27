import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi"; // ✅ New phone icon

const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50 min-h-screen">
      <div className="bg-white max-w-4xl mx-auto p-6 md:p-10 rounded-xl shadow border border-orange-200">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center underline text-gray-900 mb-10">
          Contact Me
        </h1>

        {/* Greeting box */}
        <div className="border border-orange-300 bg-orange-50 rounded-lg p-6 md:p-8 mb-10 shadow text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Let’s Connect!</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Whether you want to collaborate, have a question, or just want to say hi —<br />
            I’m always open to meaningful conversations and opportunities. Don’t hesitate to reach out!
          </p>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800 text-base md:text-lg">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-orange-500 text-2xl mt-1" />
              <a
                href="mailto:uday.shastrakar@gmail.com"
                className="text-blue-600 underline break-words"
              >
                uday.shastrakar@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-4">
              <FiPhoneCall className="text-orange-500 text-2xl mt-1 transform scale-x-[-1]" /> {/* ✅ flipped phone icon */}
              <div>
                <p>+91 8668713992</p>
                <p>+91 8149904347</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaLinkedin className="text-orange-500 text-2xl mt-1" />
              <a
                href="https://www.linkedin.com/in/uday-shastrakar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-words"
              >
                linkedin.com/in/uday-shastrakar
              </a>
            </div>

            <div className="flex items-start gap-4">
              <FaGithub className="text-orange-500 text-2xl mt-1" />
              <a
                href="https://github.com/Uday-Shastrakar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-words"
              >
                github.com/Uday-Shastrakar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
