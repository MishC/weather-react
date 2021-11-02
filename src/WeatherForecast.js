import React from "react";

export default function WeatherForecast(props) {
  return (
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
          <span className="forecast">18°C</span>
          <span className="forecast-night">5°C</span>
        </h6>
      </div>
    </div>
  );
}
