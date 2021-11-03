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
        <div className="col-lg-4 offset-lg-1 col-md-3 offset-md-2 col-sm-3    col-sm-4 ">
          <WeatherTemperature temperature={props.temperature} animate={false} />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-sm-auto p-0 ms-0 ">
          <h1 className="card-title">
            <WeatherIcon code={props.icon} size={50} />
          </h1>
          <footer>
            <h6 className="iconic text-capitalize">{props.description}</h6>
          </footer>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4 col-sm-auto ms-3">
          <ul className="card-text text-left">
            <li className="text-left">
              <h6>Precipitation: {props.precipitation} %</h6>
            </li>
            <li>
              <h6 className="text-left">Wind: {props.wind} m/s</h6>
            </li>
            <li>
              <h6 className="text-left">Humidity: {props.humidity}%</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
