import { PrimaryButton } from '@fluentui/react/lib/Button';
import "./App.css";
import { Weather_Api_Key, Weather_Api_Url } from "./api";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import Search from "./components/search/search";
import { useState } from "react";
import React from "react";
import RandomWeather from './components/random-weather/random-weather';
import { Label } from '@fluentui/react';

function App() {
  const WeatherType = {CLOUDY:"Cloudy",SUNNY:"Sunny",SNOW:"Snow",RAINSNOW:"RainSnow",PARTLYCLOUDYDAY:"PartlyCloudyDay"}
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [randomWeather, setRandomWeather] = useState(null);

  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${Weather_Api_Url}/weather?lat=${lat}&lon=${lon}&appid=${Weather_Api_Key}&units=metric`
    );
    const forecastFetch = fetch(
      `${Weather_Api_Url}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_Api_Key}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };
  const handleRandomWeather = () => {
    const randomWtr = generateWeatherData();
    setRandomWeather(randomWtr);
  }

  const generateWeatherData = () => {
    let startDate = new Date();
    let weatherData = [];
    for (let i=0; i<5; i++) {
        let date = new Date();
        date.setDate(startDate.getDate() + i);
        let temperature = Math.floor(Math.random() * 51) - 25;
        let weatherType = WeatherType.SUNNY;
        if(temperature <= -5) weatherType = WeatherType.SNOW;
        else if (temperature >= -5 && temperature <= 5) weatherType = WeatherType.RAINSNOW;
        else if (temperature >=5 && temperature <=10) weatherType = WeatherType.CLOUDY;
        else if (temperature >= 10 && temperature <= 20) weatherType = WeatherType.PARTLYCLOUDYDAY;
        else if (temperature >= 20) weatherType = WeatherType.SUNNY;
        weatherData.push({
            date: date,
            temperature: temperature,
            weatherType: weatherType
        });
    }
    return weatherData;
  }
  return (
    <div className="container">
      <Label className='title'>Weather Forecast Application</Label>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <PrimaryButton className='button-generate' text="Generate random weather forecast" onClick={handleRandomWeather} />
      {randomWeather && <RandomWeather data={randomWeather}/>}
    </div>
  );
}

export default App;
