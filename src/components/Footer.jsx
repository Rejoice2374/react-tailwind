import Logo from "./Images/logo2.png";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilYoutube } from "@iconscout/react-unicons";
import { UilServer } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      {/** Flex container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/** Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2023, All Rights Reserved
          </div>
          {/** Logo */}
          <div>
            <img src={Logo} className="w-36" alt="" />
          </div>

          {/** Social LInks container */}
          <div className="flex justify-center space-x-4">
            {/** Link 1 */}
            <a href="#">
              <UilTwitter className="h-8" color="white" />
            </a>

            {/** Link 2 */}
            <a href="#">
              <UilServer className="h-8" color="white" />
            </a>

            {/** Link 3 */}
            <a href="#">
              <UilFacebookF className="h-8" color="white" />
            </a>

            {/** Link 4 */}
            <a href="#">
              <UilYoutube className="h-8" color="white" />
            </a>

            {/** Link 5 */}
            <a href="#">
              <UilInstagram className="h-8" color="white" />
            </a>
          </div>
        </div>

        {/** List Container */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Product
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>

          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Carrers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        {/** Inputs */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updates in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
