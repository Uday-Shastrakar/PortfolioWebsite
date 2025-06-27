const AboutPage = () => {
  return (
    <div className="pt-24 pb-16 px-4 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-xl max-w-5xl mx-auto p-8 md:p-12 border border-orange-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 underline text-center text-gray-900">
          About Me
        </h1>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Hello! I'm <strong>Uday Shastrakar</strong>, a passionate software engineer from Pune with over 1 year of hands-on experience in full-stack development. I love building efficient systems, solving real-world problems through clean code, and constantly learning emerging technologies.
          </p>

          <p>
            I specialize in backend development using <strong>Java</strong>, <strong>Kotlin</strong>, <strong>Spring Boot</strong>, and <strong>REST APIs</strong>. I'm equally comfortable with frontend technologies like <strong>React.js</strong>, <strong>Vue.js</strong>, <strong>AngularJS</strong>, <strong>ExtJS</strong>, and <strong>Tailwind CSS</strong>.
          </p>

          <p>
            My experience also includes working with <strong>Docker</strong>, <strong>Kubernetes</strong>, <strong>Kafka</strong>, <strong>Jenkins</strong>, and optimizing <strong>MySQL</strong> databases.
          </p>

          <p>
            I’ve contributed to impactful projects at <strong>Atlas Primary</strong> and <strong>Velotech Solutions</strong>, building healthcare data platforms and exam portals. My role included building microservices, writing efficient SQL queries, implementing CI/CD, and collaborating across agile teams.
          </p>

          <p>
            I hold a <strong>BCA</strong> from <strong>Gondwana University</strong> and have completed multiple certifications:
          </p>

          <ul className="list-disc list-inside ml-4 text-base">
            <li>Java Full Stack Web Development – Seed Infotech</li>
            <li>Master Microservices with Spring, Docker, and Kubernetes – Udemy</li>
            <li>Python & Django Full Stack Developer Bootcamp – Udemy</li>
          </ul>

          <p>
            I'm also proficient with tools like <strong>Git</strong>, <strong>Bitbucket</strong>, <strong>Confluence</strong>, <strong>Postman</strong>, <strong>Swagger</strong>, and testing tools like <strong>JUnit</strong>, <strong>Cucumber</strong>, and <strong>Spock</strong>.
          </p>

          <p>
            Soft skills that define me: problem-solving mindset, effective communication, and collaborative spirit in agile teams.
          </p>

          <p className="text-center text-orange-600 font-medium italic mt-8">
            "Thank you for visiting my portfolio! Feel free to <a href="/PortfolioWebsite/contact" className="underline hover:text-orange-700">get in touch</a> — I'm always open to exciting opportunities."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
