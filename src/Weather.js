import React from "react";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className=" offset-lg-2 col-md-3 offset-md-2 col-sm-3    col-sm-4 ">
          <WeatherTemperature temperature={props.temperature} />
        </div>
        <div className="col-md-2 col-sm-2 col-sm-auto p-0 ms-0 ">
          <h1 className="card-title">
            <img src={props.icon} alt={props.description} className="icon" />
          </h1>
          <footer>
            <h6 className="iconic text-capitalize">{props.description}</h6>
          </footer>
        </div>
        <div className="col-md-4 col-sm-4 col-sm-auto ms-3">
          <ul className="card-text">
            <li>
              <h6>Precipitation: {props.precipitation} %</h6>
            </li>
            <li>
              <h6>Wind: {props.wind} m/s</h6>
            </li>
            <li>
              <h6>Humidity: {props.humidity}%</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
