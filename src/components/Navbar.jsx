import Logo from "./Images/logo2.png";

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
      </div>
    </nav>
  );
};

export default Navbar;
