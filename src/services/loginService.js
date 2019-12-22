import * as axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const login = async (username, password) => {
  try {
    const result = await axios.post(`${apiUrl}login/`, {
      username,
      password
    });
    setUserInfoToLocalStorage(result.data);
    return result.data;
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
  removeUserInfoFromLocalStorage();
};

export const setUserInfoToLocalStorage = info => {
  localStorage.setItem('user', JSON.stringify(info));
};

export const getUserInfoFromLocalStorage = () => {
  JSON.parse(localStorage.getItem('user'));
};

export const setTokenToLocalStorage = token => {
  localStorage.setItem('token', JSON.stringify(token));
};

export const getTokenFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')).token;
};

export const removeUserInfoFromLocalStorage = () => {
  localStorage.clear('user');
};

export const userInfoFromLocalStorage = JSON.parse(localStorage.getItem('user'));
