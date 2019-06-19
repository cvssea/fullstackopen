import React, { useState, useEffect } from 'react';
import { getAll, create, update, remove } from './services/persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const emptyPerson = { name: '', number: '' };
  const [newPerson, setNewPerson] = useState(emptyPerson);
  const [filtered, setFiltered] = useState(persons);

  useEffect(() => {
    getAll().then(initialPersons => setPersons(initialPersons));
  }, []);

  const addPerson = e => {
    e.preventDefault();

    const isDuplicate = persons.some(p => p.name === newPerson.name);

    if (isDuplicate) {
      const isConfirmed = window.confirm(
        `${newPerson.name} is already added. Replace the old number?`
      );

      if (isConfirmed) {
        const { id } = persons.find(p => p.name === newPerson.name);
        update(id, newPerson)
          .then(returnedPerson =>
            setPersons(
              persons.map(p =>
                p.id === returnedPerson.id ? returnedPerson : p
              )
            )
          )
          .catch(e => {
            alert(
              `${newPerson.name} has already been deleted from the server!`
            );
            setPersons(persons.filter(p => p.id !== id));
          });
      }
    } else {
      create(newPerson).then(returnedPerson =>
        setPersons([...persons, returnedPerson])
      );
    }

    setNewPerson(emptyPerson);
  };

  const deletePerson = id => {
    const personToDelete = persons.filter(p => p.id === id)[0];
    const isConfirmed = window.confirm(`Delete ${personToDelete.name}?`);

    if (isConfirmed) {
      remove(id)
        .then(() => setPersons(persons.filter(p => p.id !== id)))
        .catch(e => {
          alert(`${personToDelete.name} was already deleted from the server`);
          setPersons(persons.filter(p => p.id !== id));
        });
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewPerson({
      ...newPerson,
      [name]: value,
    });
  };

  const handleFilter = e => {
    const { value } = e.target;
    setFiltered(
      persons.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))
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
      <Persons
        persons={filtered.length ? filtered : persons}
        handleDelete={deletePerson}
      />
    </div>
  );
};

export default App;
