import React, { useState } from "react";
// import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    //console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <WeatherIcon code="rain-night" size={36} />;
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <WeatherIcon code="rain-night" size={36} />;
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <WeatherIcon code="rain-night" size={36} />;
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>

          <div className="col">
            <div className="WeatherForecast-day">Thursday</div>
            <WeatherIcon code="rain-night" size={36} />;
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "7e1fbo71a48539tbb0610fa3a35820ef";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
//export default function WeatherForecast(props) {
//   const [loaded, setLoaded] = useState(false);
//   const [forecast, setForecast] = useState(null);

//   useEffect(() => {
//     setLoaded(false);
//   }, [props.coordinates]);

//   function handleForecastResponse(response) {
//     setForecast(response.data.daily);
//     setLoaded(true);
//   }

//   if (loaded) {
//     return (
//       <div className="WeatherForecast">
//         <div className="row">
//           {forecast.map(function (day, index) {
//             if (index < 5) {
//               return (
//                 <div className="col" key={index}>
//                   <WeatherForecastPreview data={day} />
//                 </div>
//               );
//             } else {
//               return null;
//             }
//           })}
//         </div>
//       </div>
//     );
//   } else {
//     let apiKey = "eac360db5fc86ft86450f3693e73o43f";
//     let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
//     axios.get(apiUrl).then(handleForecastResponse);

//     return null;
//   }
// }
