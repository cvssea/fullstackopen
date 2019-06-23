import React, { useState, useEffect } from 'react';
import { getAll, create, update, remove } from './services/people';
import Header from './components/Header';
import Notification from './components/Notification';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import People from './components/People';

const App = () => {
  const [people, setPeople] = useState([]);

  const emptyPerson = { name: '', number: '' };
  const [newPerson, setNewPerson] = useState(emptyPerson);

  const [filterValue, setFilterValue] = useState('');
  const [filtered, setFiltered] = useState(people);

  const [message, setMessage] = useState(null);

  useEffect(() => {
    getAll()
      .then(initialPersons => setPeople(initialPersons))
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

    const isDuplicate = people.some(p => p.name === newPerson.name);

    if (isDuplicate) {
      const isConfirmed = window.confirm(
        `${newPerson.name} is already added. Replace the old number?`
      );

      if (isConfirmed) {
        const { id } = people.find(p => p.name === newPerson.name);
        update(id, newPerson)
          .then(returnedPerson => {
            setPeople(
              people.map(p => (p.id === returnedPerson.id ? returnedPerson : p))
            );
            setMessage({
              success: true,
              text: `Updated number for ${returnedPerson.name}`,
            });
            setTimeout(clearMessage, 5000);
          })
          .catch(e => {
            setPeople(people.filter(p => p.id !== id));
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
      create(newPerson)
        .then(returnedPerson => {
          setPeople([...people, returnedPerson]);
          setMessage({
            success: true,
            text: `Added ${newPerson.name}!`,
          });
        })
        .catch(e =>
          setMessage({
            success: false,
            text: e.response.data.error,
          })
        );

      setTimeout(clearMessage, 5000);
    }

    setNewPerson(emptyPerson);
  };

  const deletePerson = id => {
    const personToDelete = people.find(p => p.id === id);
    const isConfirmed = window.confirm(`Delete ${personToDelete.name}?`);

    if (isConfirmed) {
      remove(id)
        .then(() => setPeople(people.filter(p => p.id !== id)))
        .catch(e => {
          setPeople(people.filter(p => p.id !== id));
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
    const filterResult = people.filter(p =>
      p.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    filterResult.length && setFiltered(filterResult);
  }, [people, filterValue]);

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
          <People people={filtered} handleDelete={deletePerson} />
        </>
      )}
    </div>
  );
};

export default App;
