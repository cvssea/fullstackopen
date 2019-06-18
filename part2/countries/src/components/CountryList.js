import React from 'react';
import Country from './Country';

const CountryList = ({ countries, onClick }) => {
  const countriesToRender = () => {
    if (countries.length === 1) {
      return <Country {...countries[0]} />;
    } else if (countries.length < 11) {
      return countries.map((c) => (
        <p key={c.numericCode}>
          {c.name}
          <button onClick={() => onClick(c.numericCode)}>show</button>
        </p>
      ));
    } else {
      return <p>Too many matches, specify another filter</p>;
    }
  };

  return <div>{countriesToRender()}</div>;
};

export default CountryList;
