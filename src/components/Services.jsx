import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaCode, FaLaptopCode, FaCubes, FaDocker, FaDatabase, FaCloud } from "react-icons/fa";
import ScrollReveal from "./utils/ScrollReveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
  const navigate = useNavigate();
  const [services] = useState([
    {
      id: 1,
      icon: <FaCode />,
      title: "Backend Development",
      description:
        "Designing scalable microservices using Java, Kotlin, Spring Boot, and RESTful APIs.",
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description:
        "Building responsive UIs with React, Vue.js, and Tailwind CSS.",
    },
    {
      id: 3,
      icon: <FaCubes />,
      title: "Full Stack Development",
      description:
        "Delivering end-to-end solutions using Java backend and modern frontend.",
    },
    {
      id: 4,
      icon: <FaDocker />,
      title: "DevOps & CI/CD",
      description:
        "Experience with Docker, Jenkins, Git, and automated deployments.",
    },
    {
      id: 5,
      icon: <FaDatabase />,
      title: "Database & Optimization",
      description:
        "Optimized SQL and managed MySQL, PostgreSQL, MSSQL with Liquibase.",
    },
    {
      id: 6,
      icon: <FaCloud />,
      title: "Cloud & Messaging",
      description:
        "Integrated Kafka, RabbitMQ, and AWS for scalable systems.",
    },
  ]);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .swiper-button-prev, .swiper-button-next {
        color: #f97316 !important; 
      }
      .swiper-pagination-bullet {
        background-color: #4b5563 !important;
        opacity: 0.5 !important;
      }
      .swiper-pagination-bullet-active {
        background-color: #f97316 !important;
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            What I <span className="text-orange-500">Provide</span>
          </h2>
        </ScrollReveal>

        <div className="relative px-8">
          <Swiper
            spaceBetween={30}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="pb-16"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id} className="h-auto">
                <div className="glass p-8 rounded-3xl text-center space-y-6 flex flex-col items-center h-full hover:border-orange-500/30 transition-all duration-500 group">
                  <div className="w-20 h-20 flex items-center justify-center bg-orange-500/10 text-orange-500 text-4xl rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-orange-500/10">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <button
                    onClick={() => navigate(`/services/${service.id}`)}
                    className="w-full py-3 bg-white/5 hover:bg-orange-500 text-white rounded-2xl font-semibold transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
