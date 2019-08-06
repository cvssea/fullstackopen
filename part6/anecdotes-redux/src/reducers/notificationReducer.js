const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.message;
    case 'REMOVE_NOTIFICATION':
      return setTimeout(() => null, 5);
    default:
      return state;
  }
};

export const setNotification = message => {
  return {
    type: 'SET_NOTIFICATION',
    message,
  };
};

// TO DO - redux-thunk
// export const removeNotification = () => {
//   return { type: 'REMOVE_NOTIFICATION' };
// };

export default notificationReducer;
