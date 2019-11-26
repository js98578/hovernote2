import * as axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const login = async (username, password) => {
  console.log(process.env)
  try {
    const result = await axios.post(`${apiUrl}login/`, {
      username,
      password
    });
    console.log(result);
    //setTokenToLocalStorage();
  } catch (err) {
    console.log(err);
    throw new Error('Login failed');
  }
};

export const setTokenToLocalStorage = token => {
  localStorage.setItem('token', JSON.stringify(token));
};
