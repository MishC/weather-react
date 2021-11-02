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
        <li className="temp">{props.celsius}</li>
        <li>
          <span className="units">
            <a href="/" style={styleC}>
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
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <ul className="temperature">
        <li className="temp">{fahrenheit}</li>
        <li>
          <span className="units">
            <a href="/" onClick={convertToCelsius} style={styleC}>
              °C{" "}
            </a>
            /
            <a href="/" style={styleF}>
              °F
            </a>
          </span>
        </li>
      </ul>
    );
  }
}

/*
 function convertToFahrenheit(event) {
    event.preventDefault();
    // let temperatureF = Math.round((props.temperature * 9) / 5 + 32);

    //setTemp(temperatureF);

    console.log(props.temperature);
    setStyleF({ color: "#D67256" });
    setStyleC({ color: "#1ab2a8" });
  }

  function convertToCelsius(event) {
    event.preventDefault();

    // setTemp(props.temperature);
    setStyleC({ color: "#D67256" });
    setStyleF({ color: "#1ab2a8" });
  }



*/
