import Hero1 from "./Images/test (1).png";
import Hero2 from "./Images/test (2).png";
import Hero3 from "./Images/test (3).png";

const Testimonial = () => {
  return (
    <div>
      <section id="Testimonials">
        {/** Container to heading and testm blocks */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">
            What's Different About Manage?
          </h2>
          {/** Testimonial Header */}
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/** Testimonial 1 */}
            <div className="flex flex-col items-center p-6 space-y-6 bg-veryLightGray md:w-1/3">
              <img src={Hero1} className="w-16 rounded-full -mt-14" alt="" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                iste quam dolorum saepe sunt assumenda nemo pariatur molestiae
                praesentium quod.
              </p>
            </div>

            {/** Testimonial 2 */}
            <div className="hidden flex-col items-center p-6 space-y-6 bg-veryLightGray md:flex md:w-1/3">
              <img src={Hero2} className="w-16 rounded-full -mt-14" alt="" />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                iste quam dolorum saepe sunt assumenda nemo pariatur molestiae
                praesentium quod.
              </p>
            </div>

            {/** Testimonial 3 */}
            <div className="hidden flex-col items-center p-6 space-y-6 bg-veryLightGray md:flex md:w-1/3">
              <img src={Hero3} className="w-16 rounded-full -mt-14" alt="" />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                iste sunt assumenda nemo pariatur molestiae praesentium quod.
              </p>
            </div>
          </div>

          <div className="my-16">
            {/** Button */}
            <a
              href="./Welcome.jsx"
              className="p-3 px-6 pt-2 text white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
