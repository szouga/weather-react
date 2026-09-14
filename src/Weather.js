import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
// import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
// import sheCodesLogo from "./shecodes_logo.png";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  // const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      // iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      // iconUrl: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }
  function search() {
    const apiKey = "7e1fbo71a48539tbb0610fa3a35820ef";
    // let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    //search for a city
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
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
