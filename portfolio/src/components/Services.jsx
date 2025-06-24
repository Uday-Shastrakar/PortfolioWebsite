import { useState } from "react";

const Services = () => {
  const [services] = useState([
    {
      id: 1,
      icon: "fa-aws",
      title: "Web Development",
      description:
        "Crafting responsive and visually appealing websites using modern front-end frameworks like React and Vue.js.",
    },
    {
      id: 2,
      icon: "fa-stack-overflow",
      title: "Full Stack Development",
      description:
        "Building end-to-end web applications with seamless integration between front-end and robust back-end systems.",
    },
    {
      id: 3,
      icon: "fa-java",
      title: "Backend Development",
      description:
        "Developing scalable and efficient APIs and services using Java, Kotlin, Spring Boot, and microservices architecture.",
    },
  ]);

  return (
    <section className="py-16 bg-white px-4">
      <h1 className="text-center text-4xl md:text-5xl font-bold underline pb-12">
        My Services
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-100 hover:bg-gray-200 transition p-6 rounded-xl shadow-md text-center space-y-4 cursor-pointer"
          >
            <i className={`fa-brands ${service.icon} text-5xl text-orange-500`}></i>
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {service.description}
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 text-lg rounded-full shadow hover:bg-orange-600 transition">
              Check
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
