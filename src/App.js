import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="App logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Weather location={"Paris"} />
      </header>
      <footer>
        <small>
          <em>
            This project is deployed on the
            <br />
            <a
              href="https://shecodes-szouga-weather-react-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>{" "}
            App and available on{" "}
            <a
              href="https://github.com/szouga/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </em>
        </small>
      </footer>
    </div>
  );
}

export default App;
