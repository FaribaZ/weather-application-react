import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import "./WeatherConversion.js";
import WeatherConversion from "./WeatherConversion.js";
import WeatherForcast from "./WeatherForcast";

function Time() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="col-6 time d-flex justify-content-center">
      <div className="col-6 date align-self-center ml-1">
        {date
          .toLocaleDateString("en-US", { day: "numeric", month: "short" })
          .toLocaleUpperCase()}
      </div>
    </div>
  );
}

export default function Weather() {
  const [city, setcity] = useState("Paris");
  const [weather, setValues] = useState({ ready: false });
  const [date, setDate] = useState(new Date());

  function showResponse(response) {
    setValues({
      ready: true,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
    setDate(new Date(response.data.dt * 1000));
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updatecity(event) {
    setcity(event.target.value);
  }

  function search() {
    let apikey = "f8e6a9e3d6fde87cb38868da460b1371";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(url).then(showResponse);
  }

  if (weather.ready) {
    return (
      <div className="weather ">
        <div className="container rounded-5 ">
          <div className="clock">
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="row ">
            <div className="col-12 ">
              <form onSubmit={handleSubmit} className="search ">
                <input
                  onChange={updatecity}
                  type="search"
                  placeholder="Enter the city"
                  className="rounded-2 p-1"
                />
                <input type="submit" value="Search" className="rounded-2 p-1" />
              </form>
            </div>
          </div>
          <div className="middle mt-4 mb-2">
            <div className="row first">
              <div className="col-6 icon justify-content-left ">
                <img src={weather.icon} alt="weather icon" />
              </div>

              <Time />
            </div>

            <div className="row second m-3">
              <div className="col-6">
                <div className="city">
                  <div>{weather.name}</div>
                </div>
                <div className="temp mt-3">
                  <WeatherConversion celsius={Math.round(weather.temp)} />
                </div>
              </div>
              <div className="col-6">
                <div className="detaile">
                  <p className="wind">Wind: {Math.round(weather.wind)} MPH</p>
                  <p className="humidity">
                    Humidity: {Math.round(weather.humidity)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="forecast">
              <div className="row">
                {weather.coordinates && (
                  <WeatherForcast coordinates={weather.coordinates} />
                )}
              </div>
            </div>
            <div className="row mb-1">
              <div className="bottom">
                <div className="footer">
                  This project was coded by{" "}
                  <a href="https://www.linkedin.com/in/fariba-zare-sakhvidi/">
                    Fariba
                  </a>{" "}
                  and is{" "}
                  <a href="https://github.com/FaribaZ/weather-application-react">
                    Open-sourced on GitHub
                  </a>{" "}
                  and hosted on{" "}
                  <a href="https://stellar-peony-02216e.netlify.app/">
                    Netlify
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
