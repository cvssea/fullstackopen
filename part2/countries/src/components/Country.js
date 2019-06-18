import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const Country = ({ name, capital, population, languages, flag }) => {
  const [weatherInfo, setWeatherInfo] = useState({});

  useEffect(() => {
    const url = `http://api.apixu.com/v1/current.json?key=ccf09d5e832341d781d193913191806&q=${capital}`;
    axios.get(url).then((response) => setWeatherInfo(response.data));
  }, [capital]);

  return (
    <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h3>Languages</h3>
      <ul>
        {languages.map((l) => (
          <li key={l.iso639_1}>{l.name}</li>
        ))}
      </ul>
      <img src={flag} alt={`${name} flag`} style={{ width: '150px' }} />
      {weatherInfo.current && <Weather capital={capital} {...weatherInfo.current} />}
    </div>
  );
};

export default Country;
