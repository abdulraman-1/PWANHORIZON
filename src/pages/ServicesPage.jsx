import MainLayout from "../layout/MainLayout";
import { 
  FaChartLine, 
  FaBuilding, 
  FaHardHat, 
  FaCommentsDollar,
  FaRulerCombined,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { motion } from "framer-motion";
import agric from '../assets/agric.jpg';
import realestateinvestment from '../assets/realestateinvestment.jpg'
import realestatemanagement from '../assets/realestatemanagement.jpg'
import propertydevelopment from '../assets/propertydevelopment.jpg'
import webinar from '../assets/webinar.jpg'
import survey from '../assets/landsurvey.jpg'
import consulting from '../assets/consulting.jpg'

import { Link} from 'react-router-dom'
import Footer from '../components/Footer'
import CTA from "../components/CTA";

const services = [
  { 
    icon: <FaChartLine className="w-8 h-8"/>, 
    title: "Real Estate Investment",
    desc: "Strategic property investment solutions for optimal returns",
    image: realestateinvestment,
    path: "/investment"
  },
  { 
    icon: <FaBuilding className="w-8 h-8"/>, 
    title: "Real Estate Management",
    desc: "Comprehensive property management services",
    image: realestatemanagement,
    path: "/estatemanagement"
  },
  { 
    icon: <FaHardHat className="w-8 h-8"/>, 
    title: "Property Development",
    desc: "End-to-end development of premium properties",
    image: propertydevelopment,
    path: "/development"
  },
  { 
    icon: <FaCommentsDollar className="w-8 h-8"/>, 
    title: "Real Estate Consulting",
    desc: "Expert advisory services for informed decisions",
    image: consulting,
    path: "/consultation"
  },
  { 
    icon: <FaRulerCombined className="w-8 h-8"/>, 
    title: "Land Surveying",
    desc: "Precision surveying and boundary determination",
    image: survey,
    path: "/surveying"
  },
  { 
    icon: <FaChalkboardTeacher className="w-8 h-8"/>, 
    title: "Seminars & Webinars",
    desc: "Educational real estate investment sessions",
    image: webinar,
    path: "/webinar"
  },
];

const ServicesPage = () => {

  return (
    <MainLayout>
      {/* Hero Section with Agricultural Background */}
      <section 
        className="relative h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${agric})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <p className="text-xl md:text-2xl">Transforming real estate through innovation</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Image */}
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="text-blue-600">{service.icon}</div>
                <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                <p className="text-gray-600 text-lg">{service.desc}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  <Link
                    to={service.path}
                  >
                  
                    Learn More →
                  </Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
      {/* Footer */}
      <Footer />
    </MainLayout>
  );
};

export default ServicesPage;