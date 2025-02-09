import MainLayout from "../Layout/Mainlayout";
import burckingham from "../assets/PDF/burckingham.png";

import CTA from '../components/CTA';
import Footer from '../components/Footer';

const BurckinghamEstate = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-8 bg-white mb-8">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="font-bold text-4xl md:text-5xl">
            Burckingham <span className="text-red-500">Estate</span>
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
              src={burckingham}
              alt="Burckingham Estate"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Text Content Section */}
          <div className="w-full md:w-1/2 p-4">
            <div className="">
              <h2 className="text-2xl font-semibold mb-4">
                About Burckingham <span className="text-red-500">Estate</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Discover the perfect blend of modern architecture and luxurious comfort at Burckingham Estate.
                Our estate offers an exclusive living experience with high-end amenities and meticulously crafted residences.
              </p>
              <p className="text-gray-700">
                Experience a community designed for elegance and convenience. Whether you are looking for a new home or an investment opportunity,
                Burckingham Estate is the epitome of refined urban living.
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
                  src="/burckinham.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            
            </div>
          </div>
        </section>

        {/* Project Details Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Price Package */}
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-500 mb-2">Price Package</h3>
              <p className="text-gray-700">10M For 465 SQM</p>
            </div>
            {/* Landmarks */}
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-500 mb-2">Landmarks</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Azagba Mixed Secondary School</li>
                <li>Delta State Polytechnique</li>
                <li>Asaba International Airport</li>
                <li>Wintech Gerald Company</li>
                <li>Federal Housing Estate</li>
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
              href="src/assets/PDF/BUCKINGHAM COURT BY PWAN HORIZON.pdf" 
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

export default BurckinghamEstate;