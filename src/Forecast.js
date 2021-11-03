import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import "./styles/Forecast.css";
import "./styles/Mediascreen.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="result Forecast">
        <ul className="strip">
          <li>Forecast for next 3 days</li>
        </ul>
        <div className="row row2">
          {forecast.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <WeatherForecast data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <p>
          This project was coded by MishC and is open-sourced on{" "}
          <a href="https://github.com/MishC/weather-react">GitHub</a> and hosted
          on <a href="https://weather-react-mishc.netlify.app/">Netlify</a>.
        </p>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;

    let lon = props.coordinates.lon;
    let apiKey = "35022efb71ba6d400064d158d8238b4b";
    let urlCity = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKey}`;
    if (typeof lat !== "undefined") {
      axios.get(urlCity).then(handleResponse);
    }
    return null;
  }
}
