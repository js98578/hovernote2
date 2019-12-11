import * as axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const login = async (username, password) => {
  try {
    const result = await axios.post(`${apiUrl}login/`, {
      username,
      password
    });
    setTokenToLocalStorage(result.data.token);
  } catch (err) {
    throw new Error(err);
  }
};

export const signUp = async (username, password) => {
  try {
    await axios.post(`${apiUrl}users/`, {
      username,
      password
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const logout = async () => {
  removeTokenFromLocalStorage();
};

export const setTokenToLocalStorage = token => {
  localStorage.setItem('token', JSON.stringify(token));
};

export const getTokenFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('token'));
};

export const removeTokenFromLocalStorage = () => {
  localStorage.clear('token');
};

export const token = JSON.parse(localStorage.getItem('token'));
