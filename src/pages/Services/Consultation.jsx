import MainLayout from "../../MainLayout";


const Consultation = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Consultation
          </h1>
          <p className="text-xl md:text-2xl">
            Get expert advice to guide your real estate journey.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Our Consultation?
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Our expert consultants have years of experience in the real estate industry.
              They provide personalized advice tailored to your specific needs, whether youre looking
              to invest, manage properties, or develop new projects.
            </p>
            <p className="text-lg">
              With a deep understanding of market trends and strategies, we help you navigate the complexities
              of the real estate landscape, ensuring you have the knowledge and guidance needed to achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What We Offer
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Offering 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4">Personalized Advice</h3>
                <p>
                  Receive guidance that is tailored to your unique real estate situation and goals.
                </p>
              </div>
            </div>
            {/* Offering 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4">Market Insights</h3>
                <p>
                  Leverage our in-depth analysis of market trends to make informed decisions.
                </p>
              </div>
            </div>
            {/* Offering 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4">Strategic Planning</h3>
                <p>
                  Benefit from comprehensive planning sessions to optimize your investments and mitigate risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8">
            Schedule your free consultation today and gain the insights you need to succeed in real estate.
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default Consultation;
