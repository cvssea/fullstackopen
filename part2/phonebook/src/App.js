import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);

  const emptyPerson = { name: '', number: '' };
  const [newPerson, setNewPerson] = useState(emptyPerson);
  const [filtered, setFiltered] = useState(persons);

  // fetch persons
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
    });
  }, []);

  // event handlers
  const addPerson = (e) => {
    e.preventDefault();

    // check for duplicate
    if (persons.every((p) => p.name !== newPerson.name)) {
      // add
      setPersons([...persons, newPerson]);
    } else {
      // alert user
      alert(`${newPerson.name} is already added to phonebook`);
    }

    setNewPerson(emptyPerson);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({
      ...newPerson,
      [name]: value,
    });
  };

  const handleFilter = (e) => {
    const { value } = e.target;
    setFiltered(
      persons.filter((p) => p.name.toLowerCase().includes(value.toLowerCase()))
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilter} />
      <h3>Add new person</h3>
      <PersonForm
        onSubmit={addPerson}
        onChange={handleChange}
        newPerson={newPerson}
      />
      <h3>Numbers</h3>
      <Persons persons={filtered.length ? filtered : persons} />
    </div>
  );
};

export default App;
