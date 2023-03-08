const Features = () => {
  return (
    <section id="features">
      {/**Flex container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/** What's Different */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's Different about Merit Circle
          </h2>
          <p className="max-w-small text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, cum
            maiores porro, sapiente quas ipsam distinctio temporibus explicabo
            quasi nam repellendus adipisci modi eaque. Id quis asperiores omnis
            molestias quisquam.
          </p>
        </div>

        {/**Numbered list */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          {/**List item 1*/}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track-Company-Wide Progress
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track-Company-Wide Progress
              </h3>
              <div className="p text-darkGrayishBlue">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium nemo porro inventore a neque eius velit hic
                laudantium at ipsam!
              </div>
            </div>
          </div>

          {/**List item 2*/}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced Built-In Report
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Advanced Built-In Report
              </h3>
              <div className="p text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                asperiores placeat aliquam minima, modi eius quidem distinctio
                ex pariatur saepe!
              </div>
            </div>
          </div>

          {/**List item 3*/}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <div className="p text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                odit quibusdam cum ab quasi veniam voluptatem, sunt iusto
                eveniet amet?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section>
      
    </section>
  );
};

export default Features;
export default Testimonial;