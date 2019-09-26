export const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        theme: action.newTheme
      };

    default:
      return state;
  }
};
