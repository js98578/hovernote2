import React, { useContext, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Fade } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { login } from '../services/loginService';
import { StatusContext } from '../contexts/StatusContext';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { fade } from '@material-ui/core/styles';

export const Login = () => {
  const [userValues, setUserValues] = useState({
    email: '',
    password: ''
  });
  const [fadeIn, setFadeIn] = useState(false);
  const [isSignUpForm, setIsSignUpForm] = useState(false);
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

  const handleSignUp = async () => {

  };

  const handleChange = name => event => {
    setUserValues({
      ...userValues,
      [name]: event.target.value
    });
  };

  const switchMode = () => {
    console.log('fadeIn', fadeIn, 'isSignup', isSignUpForm);
    setFadeIn(true);
    setIsSignUpForm(!isSignUpForm);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {isSignUpForm ? (
          <SignUpForm
            userValues={userValues}
            handleChange={handleChange}
            handleSignup={handleSignUp}
            switchMode={switchMode}
            fadeIn={fadeIn}
          />
        ) :
        (
          <LoginForm
            userValues={userValues}
            handleChange={handleChange}
            handleLogin={handleLogin}
            switchMode={switchMode}
            fadeIn={fadeIn}
          />
        )
      }
    </div>
  );
};
