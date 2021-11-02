import React, { useState } from "react";
import { useEffect } from "react";

export default function WeatherTemperature(props) {
  let [styleC, setStyleC] = useState({ color: "#1ab2a8" });
  let [styleF, setStyleF] = useState({ color: "#1ab2a8" });
  let [temp, setTemp] = useState(props.temperature);

  useEffect(() => {
    setTemp(props.temperature);
  }, [props.temperature]);

  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureF = Math.round((props.temperature * 9) / 5 + 32);

    setTemp(temperatureF);

    setStyleF({ color: "#D67256" });
    setStyleC({ color: "#1ab2a8" });
  }

  function convertToCelsius(event) {
    event.preventDefault();

    setTemp(props.temperature);
    setStyleC({ color: "#D67256" });
    setStyleF({ color: "#1ab2a8" });
  }
  return (
    <ul className="temperature">
      <li className="temp">{Math.round(temp)}</li>
      <li>
        <span className="units">
          <a href="/" onClick={convertToCelsius} style={styleC}>
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
}
