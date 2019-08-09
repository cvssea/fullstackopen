const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  try {
    const response = await fetch(baseUrl);
    const anecdotes = await response.json();
    return anecdotes;
  } catch (e) {
    console.log('getAll Error:', e);
  }
};

const create = async content => {
  try {
    const anecdote = {
      content,
      votes: 0,
    };

    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(anecdote),
    });

    if (!response.ok) throw Error('Could not post. Response NOT ok.');
    const newAnecdote = await response.json();
    return newAnecdote;
  } catch (e) {
    console.log('create Error:', e);
  }
};

const update = async data => {
  try {
    const anecdote = {
      content: data.content,
      votes: data.votes + 1,
    };

    const response = await fetch(`${baseUrl}/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(anecdote),
    });

    const updatedAnecdote = await response.json();
    return updatedAnecdote;
  } catch (e) {
    console.log('update Error:', e);
  }
};

export default { getAll, create, update };
