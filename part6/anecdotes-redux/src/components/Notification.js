import React from 'react';

const Notification = ({ store }) => {
  const style = {
    border: '1px solid',
    marginTop: '10px',
    padding: 10,
  };

  return <div style={style}>{store.getState().notification}</div>;
};

export default Notification;
