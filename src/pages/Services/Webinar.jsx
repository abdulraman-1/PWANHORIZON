import MainLayout from "../../MainLayout";

const Webinar = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Exclusive Webinar
          </h1>
          <p className="text-xl md:text-2xl">
            Discover the latest insights and strategies in real estate.
          </p>
        </div>
      </section>

      {/* Webinar Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            About the Webinar
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Our webinar is designed to equip you with valuable knowledge and actionable strategies to navigate the ever-changing real estate market. Learn from industry experts, get real-time answers to your questions, and stay ahead of the curve.
            </p>
            <p className="text-lg">
              Whether youre a seasoned investor or just starting out, our webinar offers insights that can help you make informed decisions and achieve success in your real estate ventures.
            </p>
          </div>
        </div>
      </section>

      {/* Webinar Topics Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Webinar Topics
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Topic Card 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4">
                  Market Trends
                </h3>
                <p>
                  Stay updated on the latest market trends shaping the real estate industry.
                </p>
              </div>
            </div>
            {/* Topic Card 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4">
                  Investment Strategies
                </h3>
                <p>
                  Learn proven strategies to maximize your returns and mitigate risks.
                </p>
              </div>
            </div>
            {/* Topic Card 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4">
                  Future Forecasts
                </h3>
                <p>
                  Get insights into future market movements and how to position your investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Call-to-Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Reserve Your Spot Now
          </h2>
          <p className="text-lg mb-8">
            Don’t miss this opportunity to gain expert insights and network with industry professionals.
          </p>
          <a
            href="/register"
            className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Register Today
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default Webinar;
