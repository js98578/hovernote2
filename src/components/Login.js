import React, { useContext, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Fade } from '@material-ui/core';
import { login } from '../services/loginService';
import { StatusContext } from '../contexts/StatusContext';

export const Login = () => {
  const [userValues, setUserValues] = useState({
    email: '',
    password: ''
  });
  const [fadeIn, setFadeIn] = useState(false);
  const { setLoadingStatus, setErrorSnackbarMessage, setErrorSnackbarOpen } = useContext(
    StatusContext
  );

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleLogin = async () => {
    setLoadingStatus(true);
    try {
      await login(userValues.username, userValues.password);
    } catch (e) {
      setErrorSnackbarMessage(e.message);
      setErrorSnackbarOpen(true);
    }
    setLoadingStatus(false);
  };

  const handleChange = name => event => {
    setUserValues({
      ...userValues,
      [name]: event.target.value
    });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Fade in={fadeIn}>
        <div className="flex flex-col w-500">
          <h1 className="flex justify-center text-4xl">HOVERNOTE</h1>
          <TextField
            id="outlined-email"
            label="Email"
            className="w-300"
            value={userValues.email}
            onChange={handleChange('email')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password"
            label="Password"
            className="w-300"
            value={userValues.password}
            onChange={handleChange('password')}
            margin="normal"
            variant="outlined"
          />
          <div className="flex justify-between">
            <Button onClick={handleLogin}>Sign up</Button>
            <Button onClick={handleLogin}>Login</Button>
          </div>
        </div>
      </Fade>
    </div>
  );
};
