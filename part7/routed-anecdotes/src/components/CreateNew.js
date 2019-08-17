import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const CreateNew = ({ addNew, history }) => {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addNew({
      content,
      author,
      info,
      votes: 0,
    });
    history.push('/');
  };

  return (
    <div>
      <h2>Create new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <input
            id="content"
            className="form-control"
            type="text"
            name="content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            className="form-control"
            type="text"
            name="author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="info">URL for more info</label>
          <input
            id="info"
            className="form-control"
            type="text"
            name="info"
            value={info}
            onChange={e => setInfo(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default withRouter(CreateNew);
