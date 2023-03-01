import { Homepage, Navbar, Welcome } from "./components";

const App = () => {
  const onButtonClick = () => {
    return (
      <div className="min-h-screen">
        <a href="https://imgur.com/gallery/Mo4OIF8"></a>
      </div>
    );
  };

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
