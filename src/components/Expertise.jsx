import { Link } from 'react-router-dom'; // ✅ import Link
import bannerBackground from '../assets/banner_wallpaper.svg';

const Expertise = () => {
  return (
    <div className="main-container">
      <h1 className="my-6 text-center pb-8 text-4xl md:text-5xl underline font-bold">
        My Expertise
      </h1>

      {/* Section with background */}
      <div
        className="py-12 px-4 text-white"
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: 'cover',
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

              {/* ✅ Changed from <a> to <Link> */}
              <Link
                to="/contact"
                className="inline-block bg-orange-500 px-5 py-2 text-lg rounded-full shadow hover:bg-orange-600 transition"
              >
                Hire Me
              </Link>
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
