import React, { useState } from "react";
import Weather from "./Weather";
import "./styles/SearchBar.css";
import axios from "axios";
import "./styles/Mediascreen.css";

export default function SearchBar(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({
    ready: false,
    temperature: null,
    wind: null,
    precipitation: null,
    description: "",
    icon: "",
    humidity: null,
    date: "",
    country: "",
  });
  /*let [city, setCity] = useState("");
  let [country, setCountry] = useState("");
  //let [time, setTime]=useState("");
  const [temperature, setTemperature] = useState(null);
  let [precipitation, setPrecipitation] = useState(null);
  let [wind, setWind] = useState(null);
  let [humidity, setHumidity] = useState("");
  let [description, setDescription] = useState("");
  let [icon, setIcon] = useState("");
  let [date, setDate] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();*/
  /*_______________________________*/
  /*_______________________________*/
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

  /* function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }*/
  /*___________HANDLE SEATRCH AND HANDLLE SUBMIT_______________*/
  function handleSearch(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "35022efb71ba6d400064d158d8238b4b";

    let urlCity = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&APPID=${apiKey}`;

    axios.get(urlCity).then(handleResponse);
  }
  function handleResponse(response) {
    //console.log(response.data);
    let now = new Date();
    setCity(response.data.city.name);

    setWeatherData({
      ready: true,
      city: response.data.city.name.toUpperCase(),
      country: response.data.city.country,
      temperature: Math.round(response.data.list[0].main.temp),

      icon: `https://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
      description: response.data.list[0].weather[0].description,
      precipitation: Math.round(response.data.list[0].pop),
      wind: Math.round(response.data.list[0].wind.speed),
      humidity: response.data.list[0].main.humidity,

      date: currentDate(now),
    });
  }
  /*______________________*/
  if (weatherData.ready) {
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
          country={weatherData.country}
          temperature={weatherData.temperature}
          icon={weatherData.icon}
          description={weatherData.description}
          precipitation={weatherData.precipitation}
          wind={weatherData.wind}
          humidity={weatherData.humidity}
          date={weatherData.date}
        />
      </div>
    );
  } else {
    let apiKey = "35022efb71ba6d400064d158d8238b4b";
    let urlCity = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&APPID=${apiKey}`;
    axios.get(urlCity).then(handleResponse);
    return `${city} Loading...`;
  }
}
