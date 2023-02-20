import { Navbar, Welcome } from "./components";

const App = () => {
  const onButtonClick = () => {
    return (
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Welcome />
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <h1>Hello World</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
};

export default App;
