import { Link } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaUsers,
  FaBuilding,
  FaVideo,
  FaChevronDown,
} from "react-icons/fa";
import { useState } from "react";
import useHamburger from "../Store/hamburgerStore";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const { hamburgerOpen, toggleHamburger } = useHamburger();

  const toggleMenu = (index) => {
    setOpenMenu((prev) => (prev === index ? null : index));
  };

  return (
    <nav
      className={`${
        hamburgerOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 pt-20 bg-white w-72 h-screen overflow-y-auto shadow-md z-30 lg:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      {/* Wrapping container with relative positioning for the fade-out indicator */}
      <div className="relative flex flex-col justify-between h-full px-4">
        {/* Menu Items */}
        <ul className="space-y-1">
          {[
            { icon: <FaHome size={20} />, label: "Home", path: "/" },
            {
              icon: <FaUsers size={20} />,
              label: "Services",
              path: "/services",
              subItems: [
                { label: "Real Estate Investment", path: "/investment" },
                { label: "Real Estate Management", path: "/estatemanagement" },
                { label: "Property Development", path: "/development" },
                { label: "Real Estate Consultant", path: "/consultation" },
                { label: "Land Surveying", path: "/surveying" },
                { label: "Seminars and Webinars", path: "/webinar" },
              ],
            },
            {
              icon: <FaUsers size={20} />,
              label: "About Us",
              path: "/about",
              subItems: [
                { label: "Our Founders", path: "/founders" },
                { label: "Management Team", path: "/management" },
              ],
            },
            {
              icon: <FaBuilding size={20} />,
              label: "Our Estate",
              path: "/ourestate",
              subItems: [
                { label: "Buckingham Court", path: "/buckingham-court" },
                { label: "Duke And Duchess Estate", path: "/duke-and-duchess-estate" },
                { label: "Horizon Court", path: "/horizon-court" },
                { label: "Obibi Eze Estate", path: "/obibieze-estate" },
                { label: "Irede Estate", path: "/irede-estate" },
              ],
            },
            { icon: <FaVideo size={20} />, label: "Gallery", path: "/project" },
            { icon: <FaEnvelope size={20} />, label: "Contact Us", path: "/contact" },
            { icon: <FaHome size={20} />, label: "Buy Now", path: "/buynow" },
          ].map((item, index) => (
            <li key={index} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
              <div
                className="flex items-center justify-between py-2 lg:py-4 px-2 cursor-pointer"
                onClick={() => {
                  toggleMenu(index);
                  toggleHamburger(); // Always close sidebar on any menu item click
                }}
              >
                <Link to={item.path} className="flex items-center gap-3 uppercase">
                  <span className="text-gray-500">{item.icon}</span>
                  <span className="text-xs text-gray-700 font-medium">{item.label}</span>
                </Link>
                {item.subItems && (
                  <FaChevronDown
                    size={14}
                    className={`text-gray-500 transition-transform ${openMenu === index ? "rotate-180" : ""}`}
                  />
                )}
              </div>

              {/* Sub-items */}
              {item.subItems && openMenu === index && (
                <ul className="pl-8 bg-gray-50 transition-all duration-300">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-1 lg:py-2 hover:bg-gray-100 transition-colors">
                      <Link to={subItem.path} onClick={toggleHamburger} className="text-xs text-gray-700 block">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Info */}
        <div className="pb-4 lg:pb-8">
          <h3 className="text-sm uppercase text-gray-500 font-bold mb-4">Our Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaEnvelope size={17} className="text-gray-500" />
              <span className="text-sm text-gray-700">
                pwanhorizon@gmail.com <br /> info@pwanhorizon.com
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt size={46} className="text-gray-500" />
              <span className="text-sm text-gray-700">
                D.N Danjuma House, KM 49, Olòkonla, Adjacent Lagos Business School, Lekki – Epe Expressway, Eti-Osa, Lagos 106104, Lagos, Nigeria
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhone size={17} className="text-gray-500" />
              <span className="text-sm text-gray-700">
                0806 280 6026 <br /> 08033036833
              </span>
            </li>
          </ul>

          {/* Social Media Links */}
          <h3 className="text-sm uppercase text-gray-500 font-bold mt-6 mb-4">Stay Connected</h3>
          <div className="flex gap-3">
            {[
              { icon: <FaFacebookF size={16} />, color: "bg-pink-500", link: "https://www.facebook.com/profile.php?id=61567178751846" },
              { icon: <FaInstagram size={16} />, color: "bg-pink-500", link: "https://www.instagram.com/pwanhorizon/" },
              { icon: <FaLinkedin size={16} />, color: "bg-blue-700", link: "https://www.linkedin.com/company/pwanhorizon" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`${social.color} text-white rounded-full p-3 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer`}
                >
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Fade-out Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </nav>
  );
};

export default Sidebar;
