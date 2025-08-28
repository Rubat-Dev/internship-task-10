import { useState } from "react";
import {
 
  FaBars,

} from "react-icons/fa";
import Logo from "../Assets/logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header className={`px-[8vw] py-5 flex justify-between items-center ${!isOpen && "shadow-lg"}  flex-wrap`}>
      {/* logo */}
      <a href="">
        <img src={Logo} alt="TechFlow" className="h-10" />
      </a>

      {/* Toggle Menu button */}
      <button className="md:hidden text-gray-700" onClick={toggleMenu}>
        <FaBars className="text-2xl" />
      </button>
      {/* Mobile nav */}
      <div className={`flex bg-white md:items-center md:gap-8 gap-5 max-md:w-full max-md:flex-col items-start max-md:absolute top-14 left-0 max-md:px-[8vw] max-md:shadow-lg overflow-hidden duration-300 ${isOpen?"max-md:h-[255px] max-md:pt-4":"max-md:h-0"}`}>
        <ul className="flex md:gap-8 gap-5 md:items-center max-md:flex-col">
          <li>
            <a
              href="#home"
              className="nav-link text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#home"
              className="nav-link text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#home"
              className="nav-link text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#home"
              className="nav-link text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
        {/* cta button  */}
        <button className="bg-blue-600 text-white  px-3 py-2 rounded-md">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
