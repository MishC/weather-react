import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");
  let [styleC, setStyleC] = useState({ color: "#1ab2a8" });
  let [styleF, setStyleF] = useState({ color: "#1ab2a8" });
  function convertToFahrenheit(event) {
    event.preventDefault();
    setStyleF({ color: "#D67256" });
    setStyleC({ color: "#1ab2a8" });
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    setStyleC({ color: "#D67256" });
    setStyleF({ color: "#1ab2a8" });
  }

  if (unit === "celsius") {
    setStyleC({ color: "#D67256" });
    setStyleF({ color: "#1ab2a8" });

    return (
      <ul className="temperature">
        <li className="temp">{Math.round(props.celsius)}</li>
        <li>
          <span className="units">
            <a href="/" style={styleC}>
              {props.celsius}
              °C{" "}
            </a>
            /
            <a href="/" onClick={convertToFahrenheit} style={styleF}>
              °F
            </a>
          </span>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="temperature">
        <li className="temp"> {Math.round((props.celsius * 9) / 5 + 32)}</li>
        <li>
          <span className="units">
            <a href="/" onClick={convertToCelsius} style={styleC}>
              °C{" "}
            </a>
            /
            <a href="/" style={styleF} non>
              °F
            </a>
          </span>
        </li>
      </ul>
    );
  }
}
