import { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link
import bannerImage from '../assets/uday2.png';

const About = () => {
  const [data] = useState({
    image: bannerImage,
    title: "Full Stack Developer | Java, Spring Boot, React, Python",
    desc1: `I have hands-on experience in building responsive web applications using React, Vue.js, JavaScript, and Tailwind CSS. I also develop scalable backend services with Java, Kotlin, Spring Boot, and REST APIs.`,
    desc2: `Skilled in Docker, Kafka, Jenkins, and MySQL optimization, I’ve contributed to impactful projects at Atlas Primary and Velotech Solutions. I hold a BCA from Gondwana University and certifications in Full Stack Development and Microservices.`,
    actionButton: {
      title: "Read More..",
      link: "/about",
    },
  });

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          About <span className="text-orange-500">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* Image Container with Glow */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-500/10 rounded-3xl blur-2xl group-hover:bg-orange-500/20 transition duration-500"></div>
            <div className="relative glass p-4 rounded-3xl transform group-hover:rotate-2 transition duration-500">
              <img
                src={data.image}
                alt="Uday Shastrakar"
                className="w-full h-auto max-w-sm mx-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
              {data.title}
            </h3>
            <div className="space-y-4 text-lg text-slate-400">
              <p className="leading-relaxed">{data.desc1}</p>
              <p className="leading-relaxed">{data.desc2}</p>
            </div>

            <Link
              to={data.actionButton.link}
              className="inline-flex items-center gap-2 text-orange-500 font-semibold group"
            >
              <span className="border-b-2 border-orange-500/0 group-hover:border-orange-500 transition-all duration-300">
                {data.actionButton.title}
              </span>
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
