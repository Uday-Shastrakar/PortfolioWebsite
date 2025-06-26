import { useState } from 'react';
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
    <section className="bg-gray-100 py-16 px-4">
      <h1 className="text-center text-4xl md:text-5xl underline font-bold pb-12">About Me</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={data.image}
            alt="Uday Shastrakar"
            className="w-70 h-70 md:w-80 md:h-80 object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="space-y-5 px-2">
          <h2 className="text-3xl md:text-4xl font-semibold">{data.title}</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">{data.desc1}</p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">{data.desc2}</p>
          <a
            href={data.actionButton.link}
            className="inline-block bg-orange-500 text-white px-5 py-2 text-lg rounded-full shadow hover:bg-orange-600 transition"
          >
            {data.actionButton.title}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
