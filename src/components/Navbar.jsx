import Logo from "./Images/logo2.png";
import { UilListUl } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'

// show/hide nav menu
const openBtn = document.getElementById('open-menu-btn')
const closeBtn = document.getElementById('close-menu-btn')
const nav = document.getElementById('menu')

const openNav = () => {
    nav.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
}

openBtn.addEventListener('click', openNav
)

const closeNav = () => {
    nav.style.display = "none";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
}

closeBtn.addEventListener('click', closeNav)


const Navbar = () => {
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
          <a href="#" className="hover:text-darkGrayishBlue">
            Home
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Games
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Contact Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>

        {/** Button */}
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>


        {/** Hamburger Icon */}
        <button id="open-menu-btn" className="block md:hidden focus:outline-none">
          <UilListUl classname="hamburger" color="black" />
        </button>

        <button id="close-menu-btn" className="block md:hidden focus:outline-none">
          <UilMultiply classname="hamburger" color="black" />
        </button>
      </div>

      {/** Mobile Menu */}
      <div className="md:hidden">
        <div id="menu" className="absolute flex flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:auto sm:self-center left-6 right-6 drop-shadow-md">
        <a href="#" className="hover:text-darkGrayishBlue">
            Home
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Games
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Contact Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
