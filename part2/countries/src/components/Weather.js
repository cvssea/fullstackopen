import React from 'react';

const Weather = ({ capital, temp_c, condition, wind_kph, wind_dir }) => (
  <div>
    <h3>Weather in {capital}</h3>
    <p>
      <strong>temperature: </strong>
      {temp_c} Celsius
    </p>
    <img src={condition.icon} alt={`${condition.text}`} />
    <p>
      <strong>wind: </strong>
      {wind_kph} kph direction {wind_dir}
    </p>
  </div>
);

export default Weather;
