import React, { useState } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import Loader from "react-loader-spinner";

import "./styles/App.css";
import "./styles/Mediascreen.css";

export default function App() {
  const [defaultCity, setDefaultCity] = useState("");

  function handleDefault(response) {
    setDefaultCity(response.data.city.name);
  }

  function retrievePosition(position) {
    const apiKey = "35022efb71ba6d400064d158d8238b4b";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    axios.get(url).then(handleDefault);
  }

  //console.log(defaultCity);
  if (defaultCity) {
    return (
      <div className="App">
        <div className="container">
          <div className="card main">
            <div className="card-body">
              <SearchBar defaultCity={defaultCity} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    /*Deploying retrievePosition - Default*/

    navigator.geolocation.getCurrentPosition(retrievePosition);
    return (
      <div className="loader">
        {" "}
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
