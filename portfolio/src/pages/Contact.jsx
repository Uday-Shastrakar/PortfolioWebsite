const Contact = () => {
  return (
    <div className="pt-20 pb-10 px-8 bg-white min-h-[88vh]">
      <h1 className="text-5xl font-bold text-center underline mb-8">Contact Me</h1>
      <div className="text-center space-y-4 text-lg text-gray-800">
        <p>
          Email:{" "}
          <a
            className="text-blue-600 underline"
            href="mailto:uday.shastrakar@gmail.com"
          >
            uday.shastrakar@gmail.com
          </a>
        </p>
        <p>Phone: 8668713992 / 8149904347</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/uday-shastrakar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Profile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Uday-Shastrakar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Uday-Shastrakar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
