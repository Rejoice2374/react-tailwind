import { loader } from "./";
import Hero from "./game.png";

const Homepage = () => {
  return (
    <section className="hero">
      {/** Flex Container */}
      <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:flex-row md:space-y-0">
        <div className="left-item flex flex-col items-center mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-center md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="./Welcome.jsx"
              className="p-3 px-6 pt-2 text white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="image md:w1/2">
          <img src={Hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
