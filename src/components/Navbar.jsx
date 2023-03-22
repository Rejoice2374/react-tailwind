import { useState } from "react";
import Logo from "./Images/logo2.png";
import { UilListUl } from "@iconscout/react-unicons";
import { UilMultiply } from "@iconscout/react-unicons";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="relative container mx-auto p-6">
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt2 object-scale-down h-12 w-24">
          <img src={Logo} alt=" " />
        </div>

        {/*menu itmes */}
        <div className="hidden md:flex space-x-12">
          <a href="./Welcome.jsx" className="hover:text-darkGrayishBlue">
            Home
          </a>
          <a href="./Welcome.jsx" className="hover:text-darkGrayishBlue">
            Games
          </a>
          <a href="./Welcome.jsx" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="./Welcome.jsx" className="hover:text-darkGrayishBlue">
            Contact Us
          </a>
          <a href="./Welcome.jsx" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>

        {/** Button */}
        <a
          href="./Welcome.jsx"
          className="hidden md:block p-3 px-6 pt-2 text white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
        <div className="md:hidden">
          {toggleMenu ? (
            <UilMultiply
              className="hamburger"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <UilListUl
              className="hamburger"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div>
              <div className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:auto sm:self-center left-6 right-6 drop-shadow-md">
                <a href="./Welcome.jsx" className="hover:text-darkGrayishBlue">
                  Home
                </a>
                <a href="./Welcome.jsx" className="hover:text-darkGrayishBlue">
                  Games
                </a>
                <a href="./Welcome.jsx" className="hover:text-darkGrayishBlue">
                  About Us
                </a>
                <a href="./Welcome.jsx" className="hover:text-darkGrayishBlue">
                  Contact Us
                </a>
                <a href="./Welcome.jsx" className="hover:text-darkGrayishBlue">
                  Community
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
