import MainLayout from "../layout/MainLayout";
import estateimage from '/people.jpg'
import staffimage from '/people1.jpg'
import chairman from '../assets/chairman.png'
import president from '../assets/president.jpg'
import peace from '../assets/peace.jpg'
import Daniel from '../assets/Daniel.jpg'
import { FaStar } from "react-icons/fa";

import CTA from "../components/CTA";

import Footer from "../components/Footer";

const AboutUsPage = () => {

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative lg:h-[70vh] h-[60vh] flex items-center justify-center bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
        <img 
          src={estateimage} 
          alt="About PWANHAVEN" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Building Dreams, Creating Legacies
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200">
            Your Trusted Partner in Luxury Real Estate
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={staffimage} 
              alt="Our Team" 
              className="w-full h-[400px]  lg:h-[440px] object-cover transform group-hover:scale-105 transition-all duration-500"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Redefining Real Estate Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At PWANHORIZON, we transcend traditional real estate services by combining 
              innovative solutions with unparalleled market expertise. Our team of 
              seasoned professionals is dedicated to delivering exceptional results 
              through a client-centric approach.
            </p>
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To empower clients through transparent transactions and personalized 
                service, setting new standards in the real estate industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fundamental principles guiding every decision and interaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaStar className="w-8 h-8 text-blue-600"/>, 
                title: "A-Accountability", 
                desc: "In real estate, accountability is key; we ensure every transaction is transparent, reliable, and in the best interest of our clients." 
              },
              { 
                icon: <FaStar className="w-8 h-8 text-blue-600"/>, 
                title: "R-Responsibility", 
                desc: "As a business we prioritize responsibility as a guiding principle to help you succeed." 
              },
              { 
                icon: <FaStar className="w-8 h-8 text-blue-600"/>, 
                title: "I-Integrity", 
                desc: "Integrity is the cornerstone of every successful relationship. At PWAN Horizon, integrity is our watchword." 
              },
              { 
                icon: <FaStar className="w-8 h-8 text-blue-600"/>, 
                title: "S-Service", 
                desc: "At the heart of our operations is service, therefore we strive in all conditions to serve our customers exceptionally." 
              },
              { 
                icon: <FaStar className="w-8 h-8 text-blue-600"/>, 
                title: "E-Excellence", 
                desc: "We are excellence driven." 
              },
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Visionary Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the strategic minds driving our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                name: "Dr. Augustine Ozioma Onwumere", 
                role: "Chairman/Co-founder", 
                img: chairman,
                bio: "20+ years shaping real estate landscapes"
              },
              { 
                name: "Dr. Jane Obioma Onwumere", 
                role: "Co-chairman/ Co-founder", 
                img: president,
                bio: "Operational excellence strategist"
              },
              { 
                name: "Daniel Nnamdi", 
                role: "MD/CEO", 
                img: Daniel,
                bio: "Market analysis and portfolio expert"
              },
              { 
                name: "Peace O.Nnadi", 
                role: "Non-Executive Director", 
                img: peace,
                bio: ""
              },
            ].map((member, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-[29rem] object-cover transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-200 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-200 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </MainLayout>
  );
};

export default AboutUsPage;