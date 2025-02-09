import Mainlayout from "../MainLayout";
import peace from '../assets/peace.jpg';
import Daniel from '../assets/Daniel.jpg';

import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

import CTA from '../components/CTA';
import Footer from '../components/Footer';

const ManagementTeamPage = () => {
  return (
    <Mainlayout>
      <section className="bg-gray-100 mb-8 py-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Meet Our Management Team
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Experienced leaders driving our success.
        </p>

        {/* Responsive Grid for Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-4 md:px-8">
          {/* Team Member Card 1 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Image Container */}
            <div className="relative h-[32rem]">
              <img 
                src={Daniel} 
                alt="Dr. Augustine Ozioma Onwumere" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
              />
              
              {/* Social Icons Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center pb-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white rounded-full hover:bg-blue-400 hover:text-white transition-all">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/global.salesman/" target="_blank" className="p-2 bg-white rounded-full hover:bg-pink-500 hover:text-white transition-all">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/Daniel.Nnadi/?_rdr" target="_blank" className="p-2 bg-white rounded-full hover:bg-blue-700 hover:text-white transition-all">
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-1">
                Daniel Nnamdi
              </h3>
              <p className="text-gray-200 font-medium">
                MD/CEO
              </p>
            </div>

            {/* Border Effect */}
            <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none transition-all duration-300 group-hover:border-white/40" />
          </div>

          {/* Team Member Card 2 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative h-[32rem]">
              <img 
                src={peace} 
                alt="Dr. Jane Obioma Onwumere" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
              />
              
              {/* Social Icons Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center pb-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/daniel-nnadi-global-salesman-7837ab56/" target="_blank" className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white rounded-full hover:bg-blue-400 hover:text-white transition-all">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white rounded-full hover:bg-pink-500 hover:text-white transition-all">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-white rounded-full hover:bg-blue-700 hover:text-white transition-all">
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-1">
                Peace O. Nnadi
              </h3>
              <p className="text-gray-200 font-medium">
                Non Executive Director
              </p>
            </div>

            <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none transition-all duration-300 group-hover:border-white/40" />
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </Mainlayout>
  );
};

export default ManagementTeamPage;
