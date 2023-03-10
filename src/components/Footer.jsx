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
          {/** Logo */}
          <div>
            <img src={Logo} class="h-8" alt="" />
          </div>

          {/** Social LInks container */}
          <div className="flex justify-center space-x-4">
            {/** Link 1 */}
            <a href="#">
              <UilTwitter classname="h-8" color="#61DAFB" />
            </a>

            {/** Link 2 */}
            <a href="#">
              <UilServer classname="h-8" color="#61DAFB" />
            </a>

            {/** Link 3 */}
            <a href="#">
              <UilFacebookF classname="h-8" color="#61DAFB" />
            </a>

            {/** Link 4 */}
            <a href="#">
              <UilYoutube classname="h-8" color="#61DAFB" />
            </a>

            {/** Link 5 */}
            <a href="#">
              <UilInstagram classname="h-8" color="#61DAFB" />
            </a>
          </div>
        </div>

        {/** List Container */}
      </div>
    </footer>
  );
};

export default Footer;
