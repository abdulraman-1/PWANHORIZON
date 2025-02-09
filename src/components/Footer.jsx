import { FaArrowUp } from "react-icons/fa"

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-6 md:mb-0">
            © {year} PWANHORIZON. All rights reserved.
          </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-sm">Back to Top</span>
              <FaArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>
  )
}

export default Footer