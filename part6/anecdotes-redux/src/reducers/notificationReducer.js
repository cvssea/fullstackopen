const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.message;
    case 'CLEAR_NOTIFICATION':
      return null;
    default:
      return state;
  }
};

export const setNotification = (message, delay) => dispatch => {
  const seconds = delay * 1000;
  dispatch({
    type: 'SET_NOTIFICATION',
    message,
  });
  setTimeout(() => {
    dispatch({ type: 'CLEAR_NOTIFICATION' });
  }, seconds);
};

export default notificationReducer;
