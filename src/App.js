import logo from "./PngItem_3776115.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo"></img>
        </header>

        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="App-footer">
        This project was coded by Diana Dancante and is{" "}
        <a href="https://github.com/dianasdd/dictionary-project">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
