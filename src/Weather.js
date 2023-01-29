import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function showResponse(response) {
    console.log(response);
  }
  let city = "yazd";
  let apikey = "f8e6a9e3d6fde87cb38868da460b1371";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  axios.get(url).then(showResponse);
  return (
    <div className="weather ">
      <div className="container rounded-5 ">
        <div className="row ">
          <div className="col-12 ">
            <div className="search  mt-5">
              <input
                type="search"
                placeholder="Enter the city"
                className="rounded-2 p-1"
              />
              <input type="submit" value="Search" className="rounded-2 p-1" />
            </div>
          </div>
        </div>
        <div className="middle mt-4 mb-2">
          <div className="row first">
            <div className="col-6 icon justify-content-left ">🌧</div>
            <div className="col-6 time d-flex justify-content-center">
              <div className="col-6 day">Friday</div>
              <div className="col-6 date align-self-center m-2">25 OCT</div>
            </div>
          </div>

          <div className="row second m-3">
            <div className="col-6">
              <div className="city">
                <p>yazd</p>
              </div>
              <div className="temp">
                <p>60°C</p>
              </div>
            </div>
            <div className="col-6">
              <p className="detaile">
                <p className="wind">12 MPH</p>
                <p className="humidity">70%</p>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="forecast">
            <ul className="d-flex justify-content-evenly">
              <li className="days">Fry</li>
              <li className="days">Thu</li>
              <li className="days">Mon</li>
              <li className="days">Sun</li>
              <li className="days">Sun</li>
            </ul>
          </div>
          <div className="row">
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
                <a href="https://stellar-peony-02216e.netlify.app/">Netlify</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
