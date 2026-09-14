import React from "react";
import Weather from "./Weather";
import "./App.css";
export default function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <div className="container">
            <Weather defaultCity="New York" />
          </div>
          <footer className="text-center">
            <small>
              <em>
                This project is deployed on the
                <br />
                <a
                  href="https://shecodes-szouga-weather-react-app.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Netlify App
                </a>
                and deployed on{" "}
                <a href="https://shecodes-weather-react-app-szouga.vercel.app/">
                  Vercel
                </a>
                <br />
                Available on
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
      </div>
    </div>
  );
}
