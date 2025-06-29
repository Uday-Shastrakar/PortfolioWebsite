import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const servicesData = [
  {
    id: 1,
    title: "Backend Development",
    description: `Developed scalable and secure microservices using Java, Kotlin, and Spring Boot following clean code principles.
Implemented RESTful APIs and applied design patterns like Singleton and Builder for modular and maintainable code.
Integrated Kafka and RabbitMQ for real-time messaging and asynchronous processing in distributed systems.
Utilized Spring Security for API protection, handled data persistence using JPA/Hibernate, and optimized performance with MySQL indexing and caching.`,
    link: "", // Add project link here
  },
  {
    id: 2,
    title: "Frontend Development",
    description: `Built interactive and mobile-responsive user interfaces using React, Vue.js, and Tailwind CSS.
Created dynamic form components, routing mechanisms, and loading states to enhance user experience.
Integrated APIs for real-time data visualization and handled state management using React hooks and Vuex.
Maintained pixel-perfect UI consistency and tested with responsive design tools.`,
    link: "",
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: `Delivered complete end-to-end solutions by integrating Spring Boot backend with React/Vue.js frontend.
Worked on core modules including authentication, dashboard analytics, form submissions, and dynamic routing.
Managed full-stack deployment pipelines using Jenkins, Docker, and Bitbucket.
Ensured clean architecture using MVC structure, DTO patterns, and service/repository layering.`,
    link: "",
  },
  {
    id: 4,
    title: "DevOps & CI/CD",
    description: `Configured Jenkins pipelines for automated build, test, and deployment of microservices.
Wrote and maintained Dockerfiles and docker-compose.yml to orchestrate multi-container setups including Kafka and Zookeeper.
Managed database migrations using Flyway and Liquibase in CI pipelines.
Used Bitbucket for version control, Jira for agile project tracking, and Confluence for documentation and knowledge sharing.`,
    link: "",
  },
  {
    id: 5,
    title: "Database & Optimization",
    description: `Designed normalized schemas and optimized SQL queries across MySQL, PostgreSQL, and MSSQL databases.
Used Hibernate ORM for effective object-relational mapping and lazy/eager loading strategies.
Applied query optimization techniques including indexing, join analysis, and query profiling.
Handled schema versioning with Liquibase and Flyway in multi-environment deployments (Dev, UAT, Prod).`,
    link: "",
  },
  {
    id: 6,
    title: "Cloud & Messaging",
    description: `Integrated Kafka for producer-consumer architecture enabling large-scale message processing.
Worked with RabbitMQ for queue-based job processing and retry mechanisms.
Deployed and monitored services on AWS EC2 with S3 integration for static content.
Configured environment-based pipelines for staging and production deployments, and worked on access controls and service hardening.`,
    link: "",
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.id === parseInt(id));

  useEffect(() => {
    if (!service) {
      navigate("/services");
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <div className="min-h-screen pt-28 pb-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">
          {service.title}
        </h1>
        <p className="text-lg text-gray-800 whitespace-pre-line">
          {service.description}
        </p>

        {service.link && (
          <div className="mt-6">
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-orange-600 transition text-base"
            >
              View Related Project
            </a>
          </div>
        )}

        <button
          onClick={() => navigate("/services")}
          className="mt-8 bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition"
        >
          Back to Services
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
