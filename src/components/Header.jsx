import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  let title = location.pathname.split("/")[1]
    .replace(/-/g, " ")  // Replace dashes with spaces
    .toUpperCase();

  if (title === "") {
    title = "PWANHORIZON";
  }

  return (
    <header className="w-full fixed left-0 right-0 top-0 h-20 bg-white shadow pr-6 lg:pr-12 pl-6 lg:pl-72 z-50">
      {/* Logo Section */}
      <div className="absolute top-0 left-0 lg:w-72 pl-6 h-20 flex items-center justify-center">
        <Link to="/">
          <img src="/PWANHORIZON.png" alt="PWANHAVEN LOGO" className="h-12" />
        </Link>
      </div>

      {/* Navigation and CTA */}
      <div className="flex justify-between items-center h-20">
        <span className="location text-base text-gray-600 pl-8 hidden lg:block">
          {title}
        </span>

        <div className="flex gap-1 items-center ml-auto">
          <li className="lg:hidden block">
            <HamburgerMenu />
          </li>
          <button className="flex items-center p-3 gap-2 text-xs lg:text-sm text-white bg-red-600 rounded-sm whitespace-nowrap">
            <a
              href="https://api.whatsapp.com/send/?phone=08033036833&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              { "LET'S CHAT" }
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
