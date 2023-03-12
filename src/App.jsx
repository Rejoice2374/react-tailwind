import {
  Header,
  Navbar,
  CTA,
  Features,
  Testimonial,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="Beginning">
        <Navbar />
        <Header />
      </div>
      <div className="Central">
        <Features />
        <Testimonial />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
