import MainLayout from "../../Layout/Mainlayout";

const Investment = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Real Estate Investment Services
          </h1>
          <p className="text-xl md:text-2xl">
            Unlock the potential of your portfolio with our expert strategies.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Invest in Real Estate?
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Real estate has proven to be one of the most reliable ways to build long-term wealth. Our experienced team leverages market insights and rigorous analysis to identify the best opportunities, whether you’re interested in residential, commercial, or industrial properties.
            </p>
            <p className="text-lg mb-4">
              We offer a comprehensive approach—from property acquisition and due diligence to portfolio management and financing—ensuring you receive a personalized strategy that meets your financial goals.
            </p>
            <p className="text-lg">
              Let us help you navigate the dynamic world of real estate investment with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      

      {/* Call-to-Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow Your Wealth?
          </h2>
          <p className="text-lg mb-8">
            Contact us today to learn more about our real estate investment services and discover how we can help you secure your financial future.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default Investment;
