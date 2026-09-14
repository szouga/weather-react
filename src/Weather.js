import React, { useState } from "react";
// import WeatherInfo from "./WeatherInfo";
// import WeatherForecast from "./WeatherForecast";
// import "./Weather.css";
// import sheCodesLogo from "./shecodes_logo.png";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7e1fbo71a48539tbb0610fa3a35820ef";
    // let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
// export default function Weather(props) {
//   const [weatherData, setWeatherData] = useState({ ready: false });
//   const [city, setCity] = useState(props.defaultCity);

//   function handleResponse(response) {
//     setWeatherData({
//       ready: true,
//       coordinates: response.data.coordinates,
//       temperature: response.data.temperature.current,
//       humidity: response.data.temperature.humidity,
//       date: new Date(response.data.time * 1000),
//       description: response.data.condition.description,
//       icon: response.data.condition.icon,
//       wind: response.data.wind.speed,
//       city: response.data.city,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     search();
//   }

//   function handleCityChange(event) {
//     setCity(event.target.value);
//   }

//   function search() {
//     let apiKey = "eac360db5fc86ft86450f3693e73o43f";
//     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

//     axios.get(apiUrl).then(handleResponse);
//   }

//   if (weatherData.ready) {
//     return (
//       <div className="Weather">
//         <a
//           href="https://www.shecodes.io/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={sheCodesLogo} className="logo" alt="SheCodes Logo" />
//         </a>
//         <form onSubmit={handleSubmit}>
//           <div className="row">
//             <div className="col-9 ">
//               <input
//                 type="search"
//                 placeholder="Enter a city.."
//                 className="form-control search-input"
//                 onChange={handleCityChange}
//               />
//             </div>
//             <div className="col-3 p-0">
//               <input
//                 type="submit"
//                 value="Search"
//                 className="btn btn-primary w-100"
//               />
//             </div>
//           </div>
//         </form>
//         <WeatherInfo data={weatherData} />
//         <WeatherForecast
//           coordinates={weatherData.coordinates}
//           city={weatherData.city}
//         />
//       </div>
//     );
//   } else {
//     search();
//     return "Loading...";
//   }
// }
