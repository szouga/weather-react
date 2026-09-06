import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
export default function Weather({ location }) {
  function handleResponse(response) {
    //alert(`The weather in New York is ${response}`);
    console.log(`${response.data}`);
    //console.log(`${response}`);
  }
  let apiKey = "7e1fbo71a48539tbb0610fa3a35820ef";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${handleResponse({ location })}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Audio
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  );
}
