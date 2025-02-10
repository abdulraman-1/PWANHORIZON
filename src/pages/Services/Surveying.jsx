import MainLayout from "../../MainLayout";
import { Link } from "react-router-dom"

const Surveying = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Survey Services
          </h1>
          <p className="text-xl md:text-2xl">
            Accurate, reliable, and efficient surveys for your property needs.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Precision in Every Measurement
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Our surveying services provide you with detailed and accurate information about your property. Whether you need boundary verification, topographic mapping, or construction layout services, our expert team is equipped with the latest technology to deliver reliable data.
            </p>
            <p className="text-lg">
              With a focus on precision and efficiency, we ensure that your projects are based on solid, dependable measurements, giving you the confidence to move forward with your plans.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Surveying Services
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Service Card 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4">Boundary Surveys</h3>
                <p>
                  Establish clear property boundaries with our comprehensive surveys, ensuring legal clarity and peace of mind.
                </p>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4">Topographic Surveys</h3>
                <p>
                  Our topographic surveys capture the contours and features of your land, providing critical data for planning and development.
                </p>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4">Construction Surveys</h3>
                <p>
                  From setting out building positions to monitoring construction progress, our surveys ensure precision and efficiency throughout your project.
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
            Get the Data You Need for Success
          </h2>
          <p className="text-lg mb-8">
            Contact us today to schedule your survey and ensure your project is built on a foundation of accurate, reliable measurements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Surveying;
