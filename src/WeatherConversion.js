import React, { useState } from "react";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFar(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        {Math.round(props.celsius)}
        <span className="unit">
          <a onClick={convertToCel}>°C</a>|{" "}
          <a href="/" onClick={convertToFar}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        {Math.round(fahrenheit)}
        <span className="unit">
          <a href="/" onClick={convertToCel}>
            °C
          </a>{" "}
          | <a onClick={convertToFar}>°F</a>
        </span>
      </div>
    );
  }
}
