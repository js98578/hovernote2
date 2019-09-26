export const notelistReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ALL_NOTES_START':
      return {
        ...state,
      };

    default:
      return state;
  }
};
