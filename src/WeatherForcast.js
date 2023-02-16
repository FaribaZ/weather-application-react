import React, { useState } from "react";
import axios from "axios";
import "./WeatherForcast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div>
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    if (props.coordinates.lat && props.coordinates.lon) {
      let apiKey = "f8e6a9e3d6fde87cb38868da460b1371";
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    }

    return null;
  }
}
