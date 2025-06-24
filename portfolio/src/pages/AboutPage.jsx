const AboutPage = () => {
  return (
    <div className="pt-24 pb-16 px-4 bg-white min-h-screen max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 underline text-center text-gray-900">
        About Me
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Hello! I'm <strong>Uday Shastrakar</strong>, a passionate and skilled software developer with hands-on experience in building robust, scalable applications.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        I specialize in <strong>Java</strong>, <strong>Kotlin</strong>, <strong>Spring Boot</strong>, and <strong>REST APIs</strong> for the backend. On the frontend, I work with
        <strong> React</strong>, <strong>Tailwind CSS</strong>, and <strong>AngularJS</strong>. My toolkit includes <strong>MySQL</strong>, <strong>Docker</strong>, <strong>Kafka</strong>, and <strong>Jenkins</strong>.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        I've contributed to impactful projects at <strong>Atlas Primary</strong> and <strong>Velotech Solutions</strong>, and hold a <strong>BCA</strong> from <strong>Gondwana University</strong>.
        I’ve completed certifications in Full Stack Development and Microservices.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        I’m enthusiastic about continuous learning and enjoy building real-world solutions. Feel free to reach out via the <a href="/contact" className="text-orange-500 underline">contact page</a>.
      </p>
    </div>
  );
};

export default AboutPage;
