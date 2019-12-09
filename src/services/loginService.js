import * as axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const login = async (username, password) => {
  try {
    const result = await axios.post(`${apiUrl}login/`, {
      username,
      password
    });
    console.log(result)
    setTokenToLocalStorage();
  } catch (err) {
    throw new Error('Login failed');
  }
};

export const signUp = async (username, password) => {
  try {
    const result = await axios.post(`${apiUrl}user/`, {
      username,
      password
    });
    console.log(result);
  } catch (err) {
    throw new Error('Sign up failed');
  }
};

export const setTokenToLocalStorage = token => {
  localStorage.setItem('token', JSON.stringify(token));
};
