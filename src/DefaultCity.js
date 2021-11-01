import { useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

export default function DefaultCity() {
  const [defaultCity, setDefaultCity] = useState("");

  function handleDefault(response) {
    setDefaultCity(response.data.city.name);
    return defaultCity;
  }

  function retrievePosition(position) {
    let apiKey = "35022efb71ba6d400064d158d8238b4b";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    axios.get(url).then(handleDefault);
  }
  /*Deploying retrievePosition - Default*/
  // function getCurrentCity(event) {
  // event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);

  //}
  ///onLoad={getCurrentCity}

  return <SearchBar defaultCity={defaultCity} />;
}
