import MainLayout from "../MainLayout";
import chairman from '../assets/chairman.png'
import president from '../assets/president.jpg'
import { FaLinkedin, FaInstagram} from "react-icons/fa";
import Forbes from '../assets/forbes.png';
import BusinessDay from '../assets/businessday.png';
import Guardian from '../assets/guardian.png';
import Punch from '../assets/Punch_logo.svg.png';
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const OurFoundersPage = () => {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-8">
        <h1 className="text-center text-4xl text-gray-800 font-bold mb-8">Meet The Founders</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chairman Card */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative h-[32rem]">
              <img 
                src={chairman} 
                alt="Dr. Augustine Onwumere" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
              />
              
              {/* Social Icons - Always visible on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center pb-30 md:pb-40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4 p-2">
                  <a href="https://www.linkedin.com/in/augustine-onwumere-23755b2a0/?trk=people-guest_people_search-card&originalSubdomain=ng" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="lg:p-3 p-2 bg-white rounded-full hover:bg-blue-600 active:scale-95 hover:text-white transition-all">
                    <FaLinkedin className="w-8 h-8 md:w-5 md:h-5" />
                  </a>
                  
                  <a href="https://www.instagram.com/augustine_onwumere/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="lg:p-3 p-2 bg-white rounded-full hover:bg-pink-500 active:scale-95 hover:text-white transition-all">
                    <FaInstagram className="w-8 h-8 md:w-5 md:h-5" />
                  </a>
                  
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-1">Dr. Augustine Ozioma Onwumere</h3>
              <p className="text-gray-200 font-medium">Chairman/Co-Founder</p>
            </div>
            <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none transition-all duration-300 group-hover:border-white/40" />
          </div>

          {/* Co-Chairman Card */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative h-[32rem]">
              <img 
                src={president} 
                alt="Dr. Jane Onwumere" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
              />
              
              {/* Social Icons - Mobile first approach */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center pb-30 md:pb-40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4 p-2">
                  <a href="https://www.linkedin.com/in/jayne-onwumere-a5232a166?originalSubdomain=ng" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="lg:p-3 p-2 bg-white rounded-full hover:bg-blue-600 active:scale-95 hover:text-white transition-all">
                    <FaLinkedin className="w-8 h-8 md:w-5 md:h-5" />
                  </a>
                  
                  <a href="https://www.instagram.com/onwumerejayne/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="lg:p-3 p-2 bg-white rounded-full hover:bg-blue-600 active:scale-95 hover:text-white transition-all">
                    <FaInstagram className="w-8 h-8 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-1">Dr. Jane Obioma Onwumere</h3>
              <p className="text-gray-200 font-medium">Co-founder/Co-Chairman</p>
            </div>
            <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none transition-all duration-300 group-hover:border-white/40" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="relative pl-8 border-l-2 border-gray-200">
            {[
                { year: "2012", event: "Company Foundation", desc: "PWAN Group was founded" },
                { year: "2015", event: "PWAN HOMES", desc: "PWAN HOMES was founded" },
                { year: "2023", event: "National Expansion", desc: "PWAN horizon became registered by the government" },
                { year: "2023", event: "Estate Development", desc: "PWAN horizon started development on several projects eg (Burckinham, Irede and Obibi Eze Estate)" },
            ].map((milestone, index) => (
                <div key={index} className="relative mb-12 pl-6">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-2" />
                <h3 className="text-xl font-bold mb-2">{milestone.year}</h3>
                <p className="font-medium text-gray-800 mb-1">{milestone.event}</p>
                <p className="text-gray-600">{milestone.desc}</p>
                </div>
            ))}
            </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h3 className="text-3xl font-bold text-center mb-12">Featured In</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-75">
            {[Forbes, BusinessDay, Guardian, Punch].map((logo, index) => (
                <div key={index} className="flex items-center justify-center h-16">
                  <img src={logo} alt="" className="h-12 object-contain" />
                </div>
            ))}
            </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </MainLayout>
  )
}

export default OurFoundersPage;