import React from 'react';

const PersonForm = ({ onSubmit, onChange, newPerson }) => (
  <form onSubmit={onSubmit}>
    <div>
      name:{' '}
      <input
        name="name"
        onChange={onChange}
        value={newPerson.name}
        placeholder="Add Name"
      />
    </div>
    <div>
      number:{' '}
      <input
        name="number"
        onChange={onChange}
        value={newPerson.number}
        placeholder="Add Number"
      />
    </div>
    <div>
      <button>add</button>
    </div>
  </form>
);

export default PersonForm;
