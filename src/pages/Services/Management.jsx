import MainLayout from "../../Layout/Mainlayout";

const Management = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Property Management Services
          </h1>
          <p className="text-xl md:text-2xl">
            Ensuring your property performs at its best, every day.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Professional Management?
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Managing a property is a full-time commitment that requires expertise,
              vigilance, and a proactive approach. Our experienced team takes the hassle out of property management,
              ensuring that your investment remains profitable and well-maintained.
            </p>
            <p className="text-lg mb-4">
              From tenant screening and leasing to maintenance and financial reporting, we provide a comprehensive service
              that lets you enjoy a stress-free investment experience. Our tailored solutions are designed to meet your unique needs,
              whether you own a single property or a large portfolio.
            </p>
            <p className="text-lg">
              Let us handle the day-to-day operations so you can focus on what matters most – growing your investment.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Optimize Your Propertys Potential?
          </h2>
          <p className="text-lg mb-8">
            Contact us today to learn how our property management services can help you achieve a hassle-free and profitable investment experience.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default Management;
