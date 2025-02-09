import MainLayout from "../MainLayout";
import horizon from "../assets/PDF/horizon.png";

import CTA from '../components/CTA'
import Footer from '../components/Footer'

const HorizonEstate = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-8 mb-8 bg-white">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="font-bold text-4xl md:text-5xl">
            Horizon Court<span className="text-red-500">Estate</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            Exquisite living spaces in the heart of the city
          </p>
        </section>

        {/* Main Content Section */}
        <section className="flex flex-col md:flex-row items-center mb-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src={horizon}
              alt="Burckingham Estate"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Text Content Section */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold mb-4">About Horizon Court <span className="text-red-500">Estate</span></h2>
            <p className="text-gray-700 mb-4">
            Embrace the fusion of sleek modern design and unparalleled comfort at Horizon Estate. Our community offers a premium living experience, featuring upscale amenities and thoughtfully designed residences. Experience a neighborhood built for both sophistication and convenience.
            </p>
            <p className="text-gray-700">
            Whether you’re seeking a stylish new home or a solid investment opportunity, Horizon Estate sets the standard for refined urban living.
            </p>
          </div>
        </section>

        {/* Project Details Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Price Package */}
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-500 mb-2">Price Package</h3>
              <p className="text-gray-700">6M For 464 SQM</p>
            </div>
            {/* Landmarks */}
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-500 mb-2">Amenities</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>WIFI SERVICE</li>
                <li>TECH HUB & CO-WORK SPACE</li>
                <li>SPORTS ARENA</li>
                <li>FITNESS CENTRE & SPA</li>
                <li>SWIMMING POOL</li>
                <li>LIBARY</li>
              </ul>
            </div>
            {/* Inspection Time */}
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-500 mb-2">Inspection Time</h3>
              <p className="text-gray-700">
                Site inspections take place every weekday & Saturday at 10AM.
              </p>
            </div>
          </div>
        </section>

        {/* Subscription Button Section */}
        <section className="text-center">
          <button className="bg-red-500 text-white py-3 px-8 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <a 
              href="src\assets\PDF\SUBSCRIPTION FORM HORIZON COURT.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Subscription Form
            </a>
          </button>
        </section>
      </div>

      <CTA />
      <Footer />
    </MainLayout>
  );
};

export default HorizonEstate;
