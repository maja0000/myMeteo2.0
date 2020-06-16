import React, { createContext, useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WeatherContext = createContext();

export function WeatherProvider(props) {
  const [weatherDisplay, setWeatherDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [citySearch, setCitySearch] = useState('Berlin');
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    //geolocation
    getCityNameFromIp();
    getWeather();
  }, []);

  // change location based on user's input
  const handleChange = (event) => {
    setCitySearch(event.target.value);
  };

  // this function gets called when user presses enter in searchbar
  const searchForNewLocation = (event) => {
    this.getWeather();
  };

  // get City name from ip address
  const getCityNameFromIp = () => {
    fetch('https://ip-api.com/json/')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise
            .reject
            // toast.error('⚠️ Sorry, we could not find your location.')
            ();
        }
      })
      .then((result) => {
        setCitySearch(result.city);
        setLoading(false);
      })
      .then((result) => getWeather());
  };

  // get API function for current weather
  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&units=metric&appid=886d3852a40cc28c819dfcb6e2ae6402`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(
            toast.error('⚠️ Sorry, we could not find your city.')
          );
        }
      })
      .then((result) => {
        setWeatherDisplay(result);
        setCityName(result.city.name);
        setLoading(false);
        // console.log(result);
      });
  };

  return (
    <>
      {loading ? (
        'loading... '
      ) : (
        <WeatherContext.Provider value={[weatherDisplay, setWeatherDisplay]}>
          {props.children}
        </WeatherContext.Provider>
      )}
    </>
  );
}
