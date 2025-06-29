import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
  const navigate = useNavigate();
  const [services] = useState([
    {
      id: 1,
      icon: "fa-java",
      title: "Backend Development",
      description:
        "Designing scalable microservices using Java, Kotlin, Spring Boot, and RESTful APIs.",
    },
    {
      id: 2,
      icon: "fa-react",
      title: "Frontend Development",
      description:
        "Building responsive UIs with React, Vue.js, and Tailwind CSS.",
    },
    {
      id: 3,
      icon: "fa-server",
      title: "Full Stack Development",
      description:
        "Delivering end-to-end solutions using Java backend and modern frontend.",
    },
    {
      id: 4,
      icon: "fa-docker",
      title: "DevOps & CI/CD",
      description:
        "Experience with Docker, Jenkins, Git, and automated deployments.",
    },
    {
      id: 5,
      icon: "fa-database",
      title: "Database & Optimization",
      description:
        "Optimized SQL and managed MySQL, PostgreSQL, MSSQL with Flyway and Liquibase.",
    },
    {
      id: 6,
      icon: "fa-cloud",
      title: "Cloud & Messaging",
      description:
        "Integrated Kafka, RabbitMQ, and AWS for scalable systems.",
    },
  ]);

  // Inline style injection (for Swiper UI)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .swiper-button-prev, .swiper-button-next {
        color: #6B7280 !important; /* Tailwind gray-500 */
      }
      .swiper-pagination-bullet {
        background-color: #D1D5DB !important; /* gray-300 */
        opacity: 1 !important;
      }
      .swiper-pagination-bullet-active {
        background-color: #6B7280 !important; /* gray-500 */
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="pt-32 pb-16 bg-white px-4">
      <h1 className="text-center text-4xl md:text-5xl font-bold underline pb-12">
        My Services
      </h1>

      <div className="max-w-6xl mx-auto relative">
        <Swiper
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-gray-100 hover:bg-gray-200 transition p-6 rounded-xl shadow-md text-center space-y-4 cursor-pointer h-full">
                <i
                  className={`fa-solid ${service.icon} text-5xl text-orange-500`}
                ></i>
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="bg-orange-500 text-white px-4 py-2 text-lg rounded-full shadow hover:bg-orange-600 transition"
                >
                  Check
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
