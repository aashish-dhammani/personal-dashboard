import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "80ffa659fb62742d1c4b72e900bfae15"; // add your API key here
let city ="San Antonio, USA"; // replace this with your city

function Weather() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    let api = `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(api).then(response => response.json()).then(data => {
      setWeather(data);
    })
  }, []);
  return (
    <Draggable>
      <div className="drag-box"> 
    <h2>It is currently {weather && weather.main.temp}° in <br/> {city}.</h2>
    </div>
  </Draggable>
  );
}

export default Weather;