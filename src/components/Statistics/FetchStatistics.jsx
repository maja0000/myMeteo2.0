import React, { useState, useEffect } from 'react';
import DisplayStatistics from './DisplayStatistics';

export default function FetchStatistics() {
  const [station, setStation] = useState(10381);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setloading] = useState(true);
  const [hasError, setError] = useState(false);
  const [city, setCity] = useState('Berlin');

  useEffect(() => {
    getWeatherStation();
  }, [city]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
      setCity(event.target.value);
    }
  };
  // api keys: yVhCGjs9 , oiIXVxv8
  const getWeatherStation = () => {
    setError(false);
    fetch(`https://api.meteostat.net/v1/stations/search?q=${city}&key=oiIXVxv8`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setStation(result.data[0].id);
      })
      .then((result) => getHistoricalWeatherData())
      .catch((err) => {
        setloading(false);
        setError(true);
      });
  };
  const getHistoricalWeatherData = () => {
    setError(false);

    fetch(
      `https://api.meteostat.net/v1/climate/normals?station=${station}&start=2019-01-01&end=2019-12-31&key=oiIXVxv8`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.data.length === 0) {
          setError(true);
          setloading(false);
        } else {
          // process data...

          const months = Object.keys(result.data.temperature);
          const weatherLabels = [
            'temperature',
            'precipitation',
            'sunshine',
            'pressure',
          ];

          let tempData = [];

          weatherLabels.forEach((label) => {
            // only process data if the data contains a label from the weatherLabels defined above
            if (result.data[label]) {
              tempData[label] = {
                dataLabel: label,
                yearData: [],
              };

              months.forEach((month) => {
                tempData[label]['yearData'].push({
                  name: month,
                  value: +result.data[label][month],
                });
              });
            }
          });
          setWeatherData(tempData);
          setloading(false);
          setError(false);
        }
      })
      .catch((err) => {
        setloading(false);
        setError(true);
      });
  };

  return (
    <div>
      <DisplayStatistics
        handleKeyPress={handleKeyPress}
        weatherData={weatherData}
        hasError={hasError}
        loading={loading}
        city={city}
      ></DisplayStatistics>
    </div>
  );
}
