import React, { useState } from "react";
import { useEffect } from "react";

export default function WeatherTemperature(props) {
  let [styleC, setStyleC] = useState({ color: "#1e1e1e", opacity: 1 });
  let [styleF, setStyleF] = useState({ color: "#1e1e1e", opacity: 0.4 });
  let [temp, setTemp] = useState(props.temperature);

  useEffect(() => {
    setTemp(props.temperature);
    setStyleF({ color: "#1e1e1e", opacity: 0.4 });
  }, [props.temperature]);

  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureF = Math.round((props.temperature * 9) / 5 + 32);

    setTemp(temperatureF);

    setStyleF({ color: "#1e1e1e", opacity: 1 });
    setStyleC({ color: "#1e1e1e", opacity: 0.4 });
  }

  function convertToCelsius(event) {
    event.preventDefault();

    setTemp(props.temperature);
    setStyleC({ color: "#1e1e1e", opacity: 1 });
    setStyleF({ color: "##1e1e1e", opacity: 0.4 });
  }
  return (
    <ul className="temperature">
      <li className="temp">{Math.round(temp)}</li>
      <li>
        <span className="units">
          <a href="/" onClick={convertToCelsius} style={styleC}>
            {props.celsius}
            °C
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
