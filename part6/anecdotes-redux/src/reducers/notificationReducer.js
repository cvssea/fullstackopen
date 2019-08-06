const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD':
    case 'VOTE':
      return action.payload.message;
    case 'REMOVE_NOTIFICATION':
      return null;
    default:
      return state;
  }
};

// TO DO - redux-thunk
export const removeNotification = () => {
  return { type: 'REMOVE_NOTIFICATION' };
};

export default notificationReducer;
