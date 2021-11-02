import React from "react";
import "./styles/Forecast.css";
import "./styles/Mediascreen.css";

export default function Forecast() {
  return (
    <div className="result Forecast">
      <ul className="strip">
        <li>Forecast for next 5 days</li>
      </ul>
      <div className="row row2">
        <div className="card col-2 sm-2 row2">
          <div className="card-body">
            <h6 className="card-title">Tuesday</h6>
            <h6>
              <span className="date">25.10.</span>
            </h6>

            <h1>
              <img src="./weather.png" className="icon-forecast" alt="" />
            </h1>

            <h6>
              <span className="forecast">18°C</span> /
              <span className="forecast-night">5°C</span>
            </h6>
          </div>
        </div>
        <div className="card col-2 sm-2 row2">
          <div className="card-body">
            <h6 className="card-title">Wednesday</h6>
            <h6>
              <span className="date">25.10.</span>
            </h6>
            <h1>
              <img
                src={require("./weather.png")}
                className="icon-forecast"
                alt=""
              />
            </h1>
            <h6>
              <span className="forecast">18°C</span> /
              <span className="forecast-night">5°C</span>
            </h6>
          </div>
        </div>
        <div className="card col-2 sm-2 row2">
          <div className="card-body">
            <h6 className="card-title">Thursday</h6>
            <h6>
              <span className="date">25.10.</span>
            </h6>

            <h1>
              <img
                src={require("./weather.png")}
                className="icon-forecast"
                alt=""
              />
            </h1>
            <h6>
              <span className="forecast">18°C</span> /
              <span className="forecast-night">5°C</span>
            </h6>
          </div>
        </div>
        <div className="card col-2 sm-2 row2">
          <div className="card-body">
            <h6 className="card-title">Friday</h6>
            <h6>
              <span className="date">25.10.</span>
            </h6>

            <h1>
              <img
                src={require("./weather.png")}
                className="icon-forecast"
                alt=""
              />
            </h1>
            <h6>
              <span className="forecast">18°C</span> /
              <span className="forecast-night">5°C</span>
            </h6>
          </div>
        </div>
        <div className="card col-2 sm-2 row2">
          <div className="card-body">
            <h6 className="card-title">Saturday</h6>
            <h6>
              <span className="date">25.10.</span>
            </h6>

            <h1>
              <img
                src={require("./weather.png")}
                className="icon-forecast"
                alt=""
              />
            </h1>
            <h6>
              <span className="forecast">18°C</span> /
              <span className="forecast-night">-5°C</span>
            </h6>
          </div>
        </div>
      </div>

      <p>
        This project was coded by MishC and is open-sourced on{" "}
        <a href="https://github.com/MishC/weather-react">GitHub</a> and hosted
        on <a href="https://weather-react-mishc.netlify.app/">Netlify</a>.
      </p>
    </div>
  );
}
