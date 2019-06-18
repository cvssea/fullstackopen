import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Country from './components/Country';
import CountryList from './components/CountryList';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showCountryInfo, setShowCountryInfo] = useState(false);
  const [countryToShow, setCountryToShow] = useState({});

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilter = (e) => {
    const { value } = e.target;
    if (value === '') {
      setFiltered([]);
    } else {
      setFiltered(
        countries.filter((c) =>
          c.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
    setShowCountryInfo(false);
  };

  const handleCountryClick = (countryCode) => {
    setShowCountryInfo(true);
    setCountryToShow(filtered.filter((c) => c.numericCode === countryCode)[0]);
  };

  return (
    <div>
      <Filter onChange={handleFilter} />
      {showCountryInfo ? (
        <Country {...countryToShow} />
      ) : (
        <CountryList countries={filtered} onClick={handleCountryClick} />
      )}
    </div>
  );
};

export default App;
