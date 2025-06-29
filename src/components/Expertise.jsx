import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa"; // Import icon
import bannerBackground from "../assets/banner_wallpaper.svg";
import resumePDF from "../assets/resume.pdf";

const Expertise = () => {
  return (
    <div className="main-container">
      <h1 className="my-6 text-center pb-8 text-4xl md:text-5xl underline font-bold">
        My Expertise
      </h1>

      {/* Section with background image */}
      <div
        className="py-12 px-4 text-white"
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full md:w-4/5 text-center lg:text-left space-y-5">
              <h2 className="text-3xl font-bold">I Love These Technologies</h2>
              <p className="text-gray-200 leading-relaxed">
                I specialize in backend services using Java, Kotlin, Spring Boot & REST APIs.
                I also build beautiful, responsive frontends using React, Tailwind CSS & AngularJS.
                Skilled in Docker, MySQL, Jenkins, Kafka, and AWS Cloud.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 justify-center lg:justify-start">
                {/* Hire Me Button */}
                <Link
                  to="/contact"
                  className="inline-block bg-orange-500 px-5 py-2 text-lg rounded-full shadow hover:bg-orange-600 transition"
                >
                  Hire Me
                </Link>

                {/* Download Resume Button with icon */}
                <a
                  href={resumePDF}
                  download="Uday_Shastrakar_Resume.pdf"
                  className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-5 py-2 text-lg rounded-full shadow hover:bg-gray-300 transition"
                  aria-label="Download Resume"
                >
                  Resume <FaDownload className="text-xl ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
              {[
                "Core Java",
                "Kotlin",
                "J2EE",
                "Hibernate (ORM Tool)",
                "Spring Framework",
                "Spring Boot Framework",
                "Spring Security",
                "ReactJs",
                "Tailwind CSS",
                "AngularJS",
                "MySQL",
                "Docker",
                "Jenkins",
                "AWS Cloud",
              ].map((tech, index) => (
                <p
                  key={index}
                  className="bg-slate-300 text-gray-900 px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition cursor-pointer"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
