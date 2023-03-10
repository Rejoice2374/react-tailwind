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
      <div>
        <Navbar />
        <Header />
      </div>
      <Features />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
