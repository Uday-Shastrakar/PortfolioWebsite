const Licensing = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-gray-50 min-h-screen">
      <div className="bg-white max-w-4xl mx-auto p-8 md:p-12 rounded-xl shadow border border-orange-200">
        <h1 className="text-4xl md:text-5xl font-bold text-center underline text-gray-900 mb-8">
          Licensing
        </h1>

        <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-6">
          <p>
            All content, visuals, and source code on this website are the intellectual property of <strong>Uday Shastrakar</strong> © 2025, unless otherwise stated.
          </p>

          <p>
            This project is created for <strong>educational</strong> and <strong>portfolio demonstration</strong> purposes only. The work showcased here reflects personal learning, professional experience, and creative contributions.
          </p>

          <p>
            Unauthorized copying, redistribution, or commercial use of the materials without explicit permission is strictly prohibited.
          </p>

          <p>
            If you wish to reference or use parts of this project, please contact me through the{" "}
            <a href="/PortfolioWebsite/contact" className="text-orange-600 underline hover:text-orange-700">
              Contact
            </a>{" "}
            page for collaboration or licensing inquiries.
          </p>

          <p className="italic text-sm text-center pt-4 text-gray-500">
            Last Updated: June 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Licensing;
