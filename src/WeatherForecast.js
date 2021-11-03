import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  //console.log(props.data);
  let date = new Date(props.data.dt * 1000);
  // let image = props.data.weather[0].icon;
  //let imageLink = `https://openweathermap.org/img/wn/${image}@2x.png`;

  function showWeekDay(now) {
    let dayWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = now.getDay();
    let weekDay = dayWeek[day];

    return weekDay;
  }
  return (
    <div className="card col-2 sm-2 row2">
      <div className="card-body">
        <h6 className="card-title">{showWeekDay(date)}</h6>
        <h6>
          <span className="date">
            {date.getDay()}.{date.getMonth() + 1}.
          </span>
        </h6>
        <h1>
          <WeatherIcon
            code={props.data.weather[0].icon}
            size={50}
            animate={true}
          />
        </h1>
        <h6>
          <span className="forecast"> {Math.round(props.data.temp.max)}°C</span>
          <span className="forecast-night">
            {Math.round(props.data.temp.min)}°C
          </span>
        </h6>
      </div>
    </div>
  );
}
