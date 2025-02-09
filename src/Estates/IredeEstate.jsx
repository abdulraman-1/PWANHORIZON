import MainLayout from "../MainLayout";
import irede from "../assets/PDF/IREDE.png";

import CTA from '../components/CTA'
import Footer from '../components/Footer'

const HavenEstate = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-8 mb-8 bg-white">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="font-bold text-4xl md:text-5xl">
            Irede<span className="text-red-500">Estate</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            Exquisite living spaces in the heart of the city
          </p>
        </section>

        {/* Main Content Section */}
        <section className="flex flex-col md:flex-row items-center mb-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 py-4">
            <img
              src={irede}
              alt="Burckingham Estate"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Text Content Section */}
          <div className="w-full md:w-1/2 p-4">
            <div className="">
              <h2 className="text-2xl font-semibold mb-4">About Irede <span className="text-red-500">Estate</span></h2>
              <p className="text-gray-700 mb-4">
                Discover the perfect union of contemporary architecture and luxurious comfort at Duke Estate. Our estate delivers an exclusive lifestyle with top-of-the-line amenities and meticulously crafted homes. Immerse yourself in a community designed for elegance and practicality.
              </p>
              <p className="text-gray-700">
                  Whether you’re in search of your dream residence or a smart investment, Duke Estate exemplifies distinguished urban living.
              </p>
            </div>

          <div className="mt-10">
              <video 
              autoPlay
              loop
              playsInline
              controls
              className='w-full h-auto'
            >
              <source 
                src="/irede.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Price Package */}
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-500 mb-2">Price Package</h3>
              <p className="text-gray-700">7M For 464 SQM</p>
              <p className="text-gray-700">4.5M For 464 SQM</p>
            </div>
            {/* Landmarks */}
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-500 mb-2">Amenities</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Eco-Friendly</li>
                <li>Leisure</li>
                <li>24/7 Security</li>
                <li>Green Area</li>
              </ul>
            </div>
            {/* Landmarks */}
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-500 mb-2">Amenities</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                
                <li>LA CAMPAGNE TROPICANA</li>
                <li>DANGOTE REFINERY</li>
                <li>LEKKI DEEP SEAPORT</li>
                <li>LEEKI FREE TRADE ZONE</li>
                <li>NEW LEKKI INTERNATIONAL AIRPORT</li>
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
              href="src\assets\PDF\IREDE BY PWAN HORIZON.pdf" 
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

export default HavenEstate;
