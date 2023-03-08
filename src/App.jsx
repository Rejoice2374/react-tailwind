import { Header, Navbar, Welcome, Features } from "./components";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
      </div>
      <Features />
      <Welcome />
    </div>
  );
};

export default App;
