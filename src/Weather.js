import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

import "./styles/Weather.css";
import "./styles/Mediascreen.css";

export default function Weather(props) {
  return (
    <div className="result Weather">
      <ul className="strip strip1">
        <li>{props.date}</li>
        <li>
          <span className="city text-uppercase">
            {props.city} ({props.country})
          </span>
        </li>
      </ul>

      <div className="row row1">
        <div className="col-lg-4 offset-lg-1">
          <WeatherTemperature temperature={props.temperature} animate={false} />
        </div>
        <div className="col-lg-2">
          <h1 className="card-title">
            <WeatherIcon code={props.icon} size={50} />
          </h1>
          <footer>
            <h6 className="iconic text-capitalize">{props.description}</h6>
          </footer>
        </div>
        <div className="col-lg-4">
          <ul className="card-text">
            <li>
              <h6>
                <span className="properties">Wind:</span>{" "}
                <span className="values"> {props.wind} m/s</span>
              </h6>
            </li>
            <li>
              <h6>
                <span className="properties">Humidity:</span>{" "}
                <span className="values">{props.humidity}%</span>
              </h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
