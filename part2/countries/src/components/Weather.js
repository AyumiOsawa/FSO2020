import React, { useState, useEffect} from 'react';
import axios from 'axios';

const Weather = ({result, countryDisplay}) => {
  const [ weatherInfo, setWeatherInfo ] = useState({});
  const APIAccessKey = process.env.REACT_APP_API_KEY;
  const url = 'http://api.weatherstack.com/current?'
  const fullURL = `${url}access_key=${APIAccessKey}&query=${result.name}`;

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    try {
      axios
        .get(fullURL, { cancelToken: source.token })
        .then(response => {
          console.log('response.data', response.data)
          setWeatherInfo(response.data.current)
        })
    } catch (error) {
      if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
    }

    return () => source.cancel();
  }, [countryDisplay])


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
