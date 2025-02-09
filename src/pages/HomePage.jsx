import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import realestate from '../assets/real-estate.jpg';
import building from '../assets/bulding.jpg';
import estate from '../assets/realestate.jpg';
import allocation from '../assets/Allocation.jpg';
import Footer from "../components/Footer";

import CTA from '../components/CTA'

const HomePage = () => {
  const [activeText, setActiveText] = useState(0);

  const textOverlays = [
    {
      heading: "Find Your Dream Home",
      description: "Explore our exclusive collection of luxury properties tailored to your lifestyle.",
    },
    {
      heading: "Welcome to PWANHORIZON",
      description: "Your Trusted Real Estate Partner",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative lg:h-[600px] h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/estate.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center text-white px-4 w-full flex flex-col items-center">
          <div className="relative w-full max-w-3xl">
            {textOverlays.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeText === index ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase leading-tight">
                  {text.heading}
                </h1>
                <p className="text-lg md:text-xl mb-6 uppercase">
                  {text.description}
                </p>
              </motion.div>
            ))}
          </div>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors mt-32">
            <a href="https://api.whatsapp.com/message/BA6DNO77GCMPL1?autoload=1&app_absent=0" target="_blank" >
              Schedule A Tour
            </a>
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          {/* Development Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in development so we ensure that all our estates are developed to enable clients to start their construction. Developing the estate also increases property value.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={realestate}
                alt="Development"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.img
              src={building}
              alt="Building"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.img
              src={estate}
              alt="Estate"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.img
              src={realestate}
              alt="Real Estate"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>

          {/* Allocation Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={allocation}
                alt="Allocation"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Immediate Allocation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure that clients who purchase properties from us are allocated immediately upon fulfilling their obligations.
              </p>
            </motion.div>
          </div>

          {/* Verifiable Titles Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Properties With Verifiable Titles
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We deal exclusively in properties with verifiable titles, ensuring your investment is secure and protected.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={estate}
                alt="Verifiable Titles"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>


      <CTA />
      {/* Footer */}
      <Footer />
    </MainLayout>
  );
};

export default HomePage;