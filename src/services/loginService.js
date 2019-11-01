import * as axios from 'axios';

export const login = async (username, password) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_API_URL}login/`,
      {
        username,
        password,
      }
    );
    console.log(result);
    //setTokenToLocalStorage();
  } catch (err) {
    console.log(err);
    throw new Error('Login failed');
  }
};

export const setTokenToLocalStorage = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
}
