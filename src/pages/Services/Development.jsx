import MainLayout from "../../layout/MainLayout";

const Development = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Property Development Services
          </h1>
          <p className="text-xl md:text-2xl">
            Transforming visions into vibrant communities.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Building the Future, One Project at a Time
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Our property development services are designed to turn your ideas into reality.
              From initial concept and planning to construction and marketing, we provide comprehensive solutions that create sustainable and innovative spaces.
            </p>
            <p className="text-lg mb-4">
              With a deep understanding of market trends and regulatory requirements, our team collaborates with architects, engineers, and local authorities to deliver projects that are both aesthetically pleasing and highly functional.
            </p>
            <p className="text-lg">
              Whether you’re looking to develop residential communities, commercial centers, or mixed-use spaces, we are dedicated to building environments that enhance quality of life and drive long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Development Process
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Process Step 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4">
                  Concept & Planning
                </h3>
                <p>
                  We work closely with you to transform your vision into a concrete plan, analyzing market trends and ensuring regulatory compliance.
                </p>
              </div>
            </div>
            {/* Process Step 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4">
                  Construction & Management
                </h3>
                <p>
                  Our team oversees every phase of construction, ensuring that your project is executed on time, within budget, and to the highest standards.
                </p>
              </div>
            </div>
            {/* Process Step 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4">
                  Marketing & Sales
                </h3>
                <p>
                  We develop targeted marketing strategies and leverage our extensive network to showcase your development and attract the right buyers or tenants.
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
            Ready to Develop Your Next Project?
          </h2>
          <p className="text-lg mb-8">
            Let’s collaborate to create exceptional spaces that stand the test of time. Contact us today to start your development journey.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </MainLayout>
  );
};

export default Development;
