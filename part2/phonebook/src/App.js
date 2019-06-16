import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);

  const emptyPerson = { name: '', number: '' };
  const [newPerson, setNewPerson] = useState({ ...emptyPerson });
  const [filtered, setFiltered] = useState([...persons]);

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

    setNewPerson({ ...emptyPerson });
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
    setFiltered([
      ...persons.filter((person) =>
        person.name.toLowerCase().includes(value.toLowerCase())
      ),
    ]);
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
      <Persons persons={filtered} />
    </div>
  );
};

export default App;
