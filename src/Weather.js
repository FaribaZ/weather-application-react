import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="container  rounded-5">
        <div className="row ">
          <div className="col-12 justify-content-center">
            <div className="search ">
              <input type="search" placeholder="Enter the city" />
              <input type="submit" value="Search" />
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="row m-4">
            <div className="col-6 icon justify-content-left">🌧</div>
            <div className="col-6 date justify-content-right">friday</div>
          </div>

          <div className="row m-4">
            <div className="col-6">
              <ddiv className="city">
                <h3>yazd</h3>
              </ddiv>
              <div className="temp">
                <h1>60°C</h1>
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
        <div className="row m-4">
          <div className="bottom">
            <div className="forecast"></div>
            <div className="footer">Fariba</div>
          </div>
        </div>
      </div>
    </div>
  );
}
