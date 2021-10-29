import React, { useState } from "react";

import "./styles/Weather.css";
import "./styles/Mediascreen.css";

export default function Weather(props) {
  let [styleC, setStyleC] = useState({ color: "#1ab2a8" });
  let [styleF, setStyleF] = useState({ color: "#1ab2a8" });
  //let [temp, setTemp] = useState(props.temperature);

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

  /**__________**/
  function currentDate(now) {
    let day = now.getDay(); //Day of the week, number 0-6
    let month = now.getMonth(); //current month, number of 0-11
    let hours = now.getHours(); //hour, number of 0-24
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = now.getMinutes(); //hour, number of 0-59
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let dayToday = now.getUTCDate();
    let dayWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let weekDay = dayWeek[day];
    let currentMonth = months[month];
    let time = hours + ":" + minutes;
    let suff = "";
    if (dayToday === 1) {
      suff = "st";
    } else if (dayToday === 2) {
      suff = "nd";
    } else if (dayToday === 3) {
      suff = "rd";
    } else {
      suff = "th";
    }
    return `${weekDay} ${dayToday}${suff} of ${currentMonth},
    ${time}`;
  }
  let now = new Date();

  let date = useState(currentDate(now));
  return (
    <div className="result Weather">
      <ul className="strip strip1">
        <li>{date}</li>
        <li>
          <span className="city">
            {props.city} ({props.country})
          </span>
        </li>
      </ul>

      <div className="row row1">
        <div className="col-2 offset-lg-2 offset-md-1 col-sm-auto row1">
          <ul className="temperature">
            <li className="temp">{props.temperature}</li>
            <li>
              <span className="units">
                <a href="/" onClick={convertToCelsius} style={styleC}>
                  °C{" "}
                </a>
                /
                <a href="/" onClick={convertToFahrenheit} style={styleF}>
                  °F
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-2 col-md-2 col-sm-auto row1">
          <h1 className="card-title">
            <img src={props.icon} alt={props.description} className="icon" />
          </h1>
          <footer>
            <h6 className="iconic">{props.description}</h6>
          </footer>
        </div>
        <div className="col-2 col-md-2 col-sm-auto row1">
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
