import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import bannerImage from "../assets/uday3.jpg";
import bannerBackground from "../assets/banner_wallpaper.svg";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Java Developer",
        "Backend Developer",
        "Kotlin Developer",
        "Frontend Developer",
        "Python Developer",
      ],
      startDelay: 300,
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="text-white w-full px-4 md:px-10 py-16 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-4xl md:text-5xl font-bold">Uday Shastrakar</h1>
          <h2 className="text-2xl md:text-3xl">
            I am a <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-200">
            I have hands-on experience in building responsive web applications
            using <strong>React</strong>, <strong>Vue.js</strong>,{" "}
            <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>. I
            also develop scalable backend services with <strong>Java</strong>,{" "}
            <strong>Kotlin</strong>, <strong>Spring Boot</strong>, and{" "}
            <strong>REST APIs</strong>. Skilled in <strong>Docker</strong>,{" "}
            <strong>Kafka</strong>, <strong>Jenkins</strong>, and{" "}
            <strong>MySQL</strong> optimization, I’ve contributed to impactful
            projects at <strong>Atlas Primary</strong> and{" "}
            <strong>Velotech Solutions</strong>. I hold a{" "}
            <strong>BCA</strong> from <strong>Gondwana University</strong> and
            certifications in <strong>Full Stack Development</strong> and{" "}
            <strong>Microservices</strong>.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/uday-shastrakar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:bg-orange-500 cursor-pointer rounded-full w-12 h-12 flex justify-center items-center bg-gray-700 transition"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://github.com/Uday-Shastrakar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:bg-orange-500 cursor-pointer rounded-full w-12 h-12 flex justify-center items-center bg-gray-700 transition"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/uday.shastrakar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:bg-orange-500 cursor-pointer rounded-full w-12 h-12 flex justify-center items-center bg-gray-700 transition"
            >
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
          </div>

          {/* Contact Button */}
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block text-lg px-6 py-2 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="Uday Shastrakar"
            className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
