import MainLayout from "../MainLayout";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import contact from '../assets/pwan2.jpg'
import ContactCard from "../components/ContactCard";

const ContactUsPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0">
            <img src={contact} alt="Contact" className="w-full h-full object-cover" />
            <div className="absolute inset-0 "></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Get in Touch
            </h1>
            <p className="text-lg md:text-xl">
            We’d love to hear from you!
            </p>
        </div>
        </section>


      {/* Contact Content */}
      <section className="py-16  md:px-8">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
                    <p className="text-gray-600">D.N Danjuma House, KM 49, Olòkonla, <br />Adjacent Lagos Business School, Lekki – Epe Expressway,<br /> Eti-Osa, Lagos 106104, Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaPhone className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
                    <p className="text-gray-600">+234 806 280 6026<br/>+234 803 303 6833</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaEnvelope className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email Address</h3>
                    <p className="text-gray-600">info@pwanhorizon.com<br/>pwanhorizon@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61567178751846" target="_blank" className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/pwanhorizon/" target="_blank" className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/pwanhorizon" target="_blank" className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactCard />
          {/* Full-width Map */}
          <div className="md:col-span-2 ">
            <div className="rounded-sm overflow-hidden shadow-lg">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.369166527033!2d3.602249484672074!3d6.4748373070278955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf98ead3e7dc9%3A0x4cd8acc06c6a70bb!2sKM%2049%20Olokonla%20Rd%2C%20Lagos-Epe%20Exp%20Road%2C%20Eti-Osa%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1738985540561!5m2!1sen!2sng"                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-sm"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactUsPage;