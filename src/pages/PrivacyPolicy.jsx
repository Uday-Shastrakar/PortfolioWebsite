const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-gray-50 min-h-screen">
      <div className="bg-white max-w-4xl mx-auto p-8 md:p-12 rounded-xl shadow border border-orange-200">
        <h1 className="text-4xl md:text-5xl font-bold text-center underline text-gray-900 mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            This Privacy Policy describes how your information is handled and protected when you visit this personal portfolio website (
            <strong>https://uday-shastrakar.github.io/PortfolioWebsite</strong>).
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">1. Information Collection</h2>
          <p>
            This website does <strong>not collect</strong> any personal data, cookies, or usage analytics. It is purely intended to present the professional profile, projects, and skills of <strong>Uday Shastrakar</strong>.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Use of Information</h2>
          <p>
            As no data is collected, there is no processing, sharing, or storing of your information. The website does not utilize tracking tools or third-party analytics.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">3. External Links</h2>
          <p>
            The website may contain links to external platforms such as LinkedIn, GitHub, or Resume hosting services. These platforms may have their own privacy policies. Users are encouraged to review them individually.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy or the website in general, feel free to reach out via the{" "}
            <a href="/PortfolioWebsite/contact" className="text-orange-600 underline hover:text-orange-700">
              Contact
            </a>{" "}
            page.
          </p>

          <p className="italic text-sm text-center pt-6 text-gray-500">
            Last Updated: June 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
