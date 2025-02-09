import MainLayout from "../Layout/MainLayout";
import duke from "../assets/PDF/duke.jpg";

import CTA from '../components/CTA'
import Footer from '../components/Footer'

const DukeAndDuchess = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-8 mb-8 bg-white">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="font-bold text-4xl md:text-5xl">
            Duke And Duchess<span className="text-red-500">Estate</span>
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
              src={duke}
              alt="Burckingham Estate"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Text Content Section */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold mb-4">About Duke And Duchess <span className="text-red-500">Estate</span></h2>
            <p className="text-gray-700 mb-4">
            Uncover the blend of innovative design and sumptuous comfort at Irede Estate. Our estate offers an exclusive living experience, featuring state-of-the-art amenities and impeccably designed homes. Revel in a community crafted for both luxury and ease.
            </p>
            <p className="text-gray-700">
                Whether you’re planning to settle in or invest, Irede Estate represents the pinnacle of refined urban living.
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
              <p className="text-gray-700">3.2M For 500 SQM</p>
              <p className="text-gray-700">2M For 300 SQM</p>
            </div>
            {/* Landmarks */}
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-red-500 mb-2">Neighborhoods</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>New Epe Toll Gate</li>
                <li>Micheal Otedola College of Education</li>
                <li>New Epe Ijebu-Ode Expressway</li>
                <li>CKC School</li>
                <li>Yabatech (Epe Campus)</li>
                <li>Nigerian Breweries</li>
                <li>{"Lekki Int'l Airport"}</li>
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
              href="src\assets\PDF\DUKE & DUCHESS CITY BY PWAN HORIZON.pdf" 
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

export default DukeAndDuchess;
