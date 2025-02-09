import { FaHome, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const EstateCard = ({ estatename }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      <div className="p-6 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
          <FaHome className="w-8 h-8 text-blue-600" />
        </div>

        {/* Estate Name */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {estatename}
        </h3>

        {/* CTA */}
        <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors">
          <span className="text-sm font-medium">View Properties</span>
          <FaArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

export default EstateCard;