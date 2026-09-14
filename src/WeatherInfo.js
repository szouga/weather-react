import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left w-auto">
              <WeatherIcon
                code={props.data.icon}
                // alt={props.data.description}
              />
            </div>
            <div className="w-auto ms-2">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
//   <div className="WeatherInfo">
//     <div className="row mt-3">
//       {/* Left Column: City and Meta Details */}
//       <div className="col-6">
//         <h1>{props.data.city}</h1>
//         <ul className="ps-0 list-unstyled">
//           <li>
//             <FormattedDate date={props.data.date} />, {props.data.description}
//           </li>
//           <li>
//             Humidity:{" "}
//             <span className="text-danger">{props.data.humidity}%</span>, Wind:{" "}
//             <span className="text-danger">{props.data.wind}km/h</span>
//           </li>
//         </ul>
//       </div>

//       {/* Right Column: Icon and Temperature matched exactly to col-6 */}
//       <div className="col-6 d-flex justify-content-end align-items-center">
//         <div className="temperature-container d-flex align-items-center">
//           <WeatherIcon code={props.data.icon} size={52} />
//           <div className="d-flex align-items-start">
//             <span className="temperature fw-bold lh-1">
//               {Math.round(props.data.temperature)}
//             </span>
//             <span className="unit fs-4">°C</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
