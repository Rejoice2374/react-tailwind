import { Homepage, Navbar, Welcome } from "./components";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Homepage />
      </div>
      <Welcome />
      <button type="button" onClick={onButtonClick}>
        Click Me
      </button>
    </div>
  );
};

export default App;
