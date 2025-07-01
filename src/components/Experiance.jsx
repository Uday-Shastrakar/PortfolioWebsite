const Experience = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-10 text-gray-800">
       <h1 className="text-center text-4xl md:text-5xl underline font-bold pb-12">Work Experience</h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Atlas Primary */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-orange-500">Junior Software Engineer</h3>
          <p className="text-sm text-gray-600">Atlas Primary · Jun 2023 – Mar 2024</p>
          <ul className="list-disc ml-6 mt-2 text-sm md:text-base space-y-1">
            <li>Built microservices with Java, Kotlin, and Spring Boot for survey data workflows.</li>
            <li>Developed and tested REST APIs using JUnit, Postman, and design patterns (Builder, Singleton, etc.).</li>
            <li>Applied MySQL optimization and schema versioning with Liquibase & Flyway.</li>
            <li>Created frontend dashboards using Vue.js for admin and reporting interfaces.</li>
            <li>Handled CI/CD with Jenkins, and containerization with Docker.</li>
            <li>Managed tasks and code using Jira, Bitbucket, and Confluence.</li>
            <li>Integrated AWS SES and JavaMail for survey notifications and approvals.</li>
            <li>Followed clean code principles and peer-reviewed code regularly.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-700">
            <strong>Tech Stack:</strong> Java, Kotlin, Spring Boot,JPA, MySQL, Liquibase, Flyway, JUnit, Docker, Jenkins, Bitbucket, Jira, Confluence, Postman, Vue.js, AWS, JavaMail
          </p>
        </div>

        {/* Velotech Solutions */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-orange-500">Software Engineer Intern</h3>
          <p className="text-sm text-gray-600">Velotech Solutions · Jan 2023 – May 2023</p>
          <ul className="list-disc ml-6 mt-2 text-sm md:text-base space-y-1">
            <li>Built backend modules using Spring Boot and Hibernate.</li>
            <li>Wrote optimized SQL queries and maintained database logic.</li>
            <li>Developed frontend functionality using ExtJS.</li>
            <li>Tested REST endpoints and integrated backend with frontend features.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-700">
            <strong>Tech Stack:</strong> Java, Spring Boot, Hibernate, MsSQL, SQL, ExtJS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
