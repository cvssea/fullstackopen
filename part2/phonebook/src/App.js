import React, { useState, useEffect } from 'react';
import { getAll, create, update, remove } from './services/persons';
import Header from './components/Header';
import Notification from './components/Notification';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);

  const emptyPerson = { name: '', number: '' };
  const [newPerson, setNewPerson] = useState(emptyPerson);

  const [filterValue, setFilterValue] = useState('');
  const [filtered, setFiltered] = useState(persons);

  const [message, setMessage] = useState(null);

  useEffect(() => {
    getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(e =>
        setMessage({
          success: false,
          fatalError: true,
          text: `${e} - Please try again later.`,
        })
      );
  }, []);

  const clearMessage = () => setMessage(null);

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
          .then(returnedPerson => {
            setPersons(
              persons.map(p =>
                p.id === returnedPerson.id ? returnedPerson : p
              )
            );
            setMessage({
              success: true,
              text: `Updated number for ${returnedPerson.name}`,
            });
            setTimeout(clearMessage, 5000);
          })
          .catch(e => {
            setPersons(persons.filter(p => p.id !== id));
            setMessage({
              success: false,
              text: `${
                newPerson.name
              } has already been deleted from the server!`,
            });
            setTimeout(clearMessage, 5000);
          });
      }
    } else {
      create(newPerson).then(returnedPerson =>
        setPersons([...persons, returnedPerson])
      );
      setMessage({
        success: true,
        text: `Added ${newPerson.name}!`,
      });
      setTimeout(clearMessage, 5000);
    }

    setNewPerson(emptyPerson);
  };

  const deletePerson = id => {
    const personToDelete = persons.find(p => p.id === id);
    const isConfirmed = window.confirm(`Delete ${personToDelete.name}?`);

    if (isConfirmed) {
      remove(id)
        .then(() => setPersons(persons.filter(p => p.id !== id)))
        .catch(e => {
          setPersons(persons.filter(p => p.id !== id));
          setMessage({
            success: false,
            text: `${personToDelete.name} was already deleted from the server`,
          });
          setTimeout(clearMessage, 5000);
        });
      setFilterValue('');
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
    setFilterValue(value);
  };

  useEffect(() => {
    const filterResult = persons.filter(p =>
      p.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    filterResult.length && setFiltered(filterResult);
  }, [persons, filterValue]);

  return (
    <div>
      <Header title="Phonebook" />
      {message && <Notification message={message} />}
      {message && message.fatalError ? null : (
        <>
          <Filter onChange={handleFilter} value={filterValue} />
          <PersonForm
            onSubmit={addPerson}
            onChange={handleChange}
            newPerson={newPerson}
          />
          <Persons persons={filtered} handleDelete={deletePerson} />
        </>
      )}
    </div>
  );
};

export default App;
