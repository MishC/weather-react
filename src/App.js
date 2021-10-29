import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Forecast from "./Forecast";
import axios from "axios";

import "./styles/App.css";
import "./styles/Mediascreen.css";

export default function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  //let [time, setTime]=useState("");
  const [temperature, setTemperature] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleDefault(response) {
    setCity(response.data.city.name);
    setCountry(response.data.city.country);
    setTemperature(Math.round(response.data.list[0].main.temp));

    setIcon(
      `https://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`
    );
    setDescription(
      capitalizeFirstLetter(response.data.list[0].weather[0].description)
    );
    setPrecipitation(Math.round(response.data.list[0].pop));
    setWind(Math.round(response.data.list[0].wind.speed));
    setHumidity(response.data.list[0].main.humidity);
    console.log(city);
  }

  function retrievePosition(position) {
    const apiKey = "35022efb71ba6d400064d158d8238b4b";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    axios.get(url).then(handleDefault);
  }
  /*Deploying retrievePosition - Default*/
  navigator.geolocation.getCurrentPosition(retrievePosition);
  return (
    <div className="App">
      <div className="container">
        <div className="card main">
          <div className="card-body">
            <SearchBar
              city={city}
              country={country}
              temperature={temperature}
              icon={icon}
              description={description}
              precipitation={precipitation}
              wind={wind}
              humidity={humidity}
            />
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}
