import React from 'react';
import { connect } from 'react-redux';

const Notification = ({ notification }) => {
  const style = {
    border: '1px solid',
    marginTop: '10px',
    padding: 10,
  };

  return <div style={style}>{notification}</div>;
};

const mapStateToProps = ({ notification }) => {
  return { notification };
};

export default connect(mapStateToProps)(Notification);
