import React, { useState } from "react";
import Weather from "./Weather";

import "./styles/SearchBar.css";
import axios from "axios";
import "./styles/Mediascreen.css";

export default function SearchBar(prop) {
  /*_______________________________*/
  let [city, setCity] = useState(prop.city);
  let [country, setCountry] = useState(prop.country);
  //let [time, setTime]=useState("");
  let [temperature, setTemperature] = useState(prop.temperature);
  let [precipitation, setPrecipitation] = useState(prop.precipitation);
  let [wind, setWind] = useState(prop.wind);
  let [humidity, setHumidity] = useState(prop.humidity);
  let [description, setDescription] = useState(prop.description);
  let [icon, setIcon] = useState(prop.icon);
  let [error, setError] = useState("");

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleSearch(event) {
    //event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "35022efb71ba6d400064d158d8238b4b";
    let urlCity = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&APPID=${apiKey}`;
    axios.get(urlCity).catch(function (error) {
      if (error.response.status === 404) {
        console.log("stop!");
        setError(`404 <br/> This ${city} is not in our database`);
        return error;
      }
    });

    axios.get(urlCity).then(handleResponse);
  }

  function handleResponse(response) {
    setCity(response.data.city.name.toUpperCase());
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
  }

  return (
    <div className="SearchBar">
      <form className="SearchBar" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-5 offset-lg-3 offset-md-2 offset-sm-2 col-xs-auto p-0">
            <div className="form-group">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control shadow-sm"
                autoFocus="on"
                id="type"
                autoComplete="off"
                onChange={handleSearch}
              />
            </div>
          </div>

          <div className="col-2 col-xs-2 m-0 p-0 d-inline w-auto">
            <input
              type="submit"
              id="search"
              value="Search"
              className="btn btn-success btn-rounded shadow-sm "
            />
          </div>
        </div>
      </form>
      <Weather
        city={city}
        country={country}
        temperature={temperature}
        icon={icon}
        description={description}
        precipitation={precipitation}
        wind={wind}
        humidity={humidity}
        error={error}
      />
    </div>
  );
}
