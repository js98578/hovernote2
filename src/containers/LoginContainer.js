import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useGlobalState } from '../state/state';
import { login } from '../services/loginService';
import { FragmentWithErrorHandling } from './withErrorHandlingHOC';

export const LoginContainer = () => {

  const handleErrorSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorSnackbarOpen(false);
  };

  const handleChange = (name) => (event) => {
    setUserValues({ ...userValues, [name]: event.target.value });
  };

  const handleLogin = () => {
    setLoadingStatus(true);
    login(userValues.username, userValues.password);
    setLoadingStatus(false);
  };

  return (
    <Login

    />
  );
};
