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
      <p>
        {Math.round(props.celsius)}
        <span class="unit">
          <a onClick={convertToCel}>°C</a>|{" "}
          <a href="/" onClick={convertToFar}>
            °F
          </a>
        </span>
      </p>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <p>
        {Math.round(fahrenheit)}
        <span class="unit">
          <a href="/" onClick={convertToCel}>
            °C
          </a>{" "}
          | <a onClick={convertToFar}>°F</a>
        </span>
      </p>
    );
  }
}
