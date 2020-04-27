import React, { useState, useEffect} from 'react';
import axios from 'axios';

const Weather = ({result}) => {
  const [ weatherInfo, setWeatherInfo ] = useState({});
  const APIAccessKey = process.env.REACT_APP_API_KEY;
  const url = 'http://api.weatherstack.com/current?'
  const fullURL = `${url}access_key=${APIAccessKey}&query=${result.name}`;

  useEffect(() => {
    axios
      .get(fullURL)
      .then(response => {
        console.log('response.data', response.data)
        setWeatherInfo(response.data.current)
      })
  }, [])


  return (
    weatherInfo ?
    (
      <>
        <h3>Weather in {result.name}</h3>
        <h4>
          <strong>temperature : </strong>
          {weatherInfo.temperature} C
        </h4>
        <img
          src={weatherInfo.weather_icons}
          alt={weatherInfo.weather_descriptions}
        />
        <h4>
          <strong>wind : </strong>
          {weatherInfo.wind_speed} mph,
          direction {weatherInfo.wind_dir}
        </h4>
      </>
    ) : (<></>)
  );
}

export default Weather;
