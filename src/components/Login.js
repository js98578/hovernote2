import React, { useContext, useState, useEffect } from 'react';
import { login, signUp } from '../services/loginService';
import { StatusContext } from '../contexts/StatusContext';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export const Login = () => {
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: ''
  });
  const [signUpValues, setSignUpValues] = useState({
    email: '',
    password1: '',
    password2: ''
  });
  const [fadeIn, setFadeIn] = useState(false);
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const {
    setLoadingStatus,
    setErrorSnackbarMessage,
    setErrorSnackbarOpen,
    setInfoSnackbarOpen,
    setInfoSnackbarMessage
  } = useContext(StatusContext);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleLogin = async () => {
    setLoadingStatus(true);
    try {
      await login(loginValues.username, loginValues.password);
    } catch (e) {
      setErrorSnackbarMessage(e.message);
      setErrorSnackbarOpen(true);
    }
    setLoadingStatus(false);
  };

  const handleSignUp = async () => {
    if (signUpValues.password1 === '' || signUpValues.password2 === '') {
      setErrorSnackbarMessage(`Empty field`);
      setErrorSnackbarOpen(true);
      return;
    }

    if (signUpValues.password1 !== signUpValues.password2) {
      setErrorSnackbarMessage(`Passwords don't match`);
      setErrorSnackbarOpen(true);
      return;
    }

    setLoadingStatus(true);
    try {
      await signUp(signUpValues.email, signUpValues.password1);
      setInfoSnackbarMessage('Signed up!');
      setInfoSnackbarOpen(true);
    } catch (e) {
      setErrorSnackbarMessage(e.message);
      setErrorSnackbarOpen(true);
    }
    setLoadingStatus(false);
  };

  const handleLoginFormChange = name => event => {
    setLoginValues({
      ...loginValues,
      [name]: event.target.value
    });
  };

  const handleSignUpFormChange = name => event => {
    setSignUpValues({
      ...signUpValues,
      [name]: event.target.value
    });
  };

  const switchMode = () => {
    setFadeIn(true);
    setIsSignUpForm(!isSignUpForm);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      {isSignUpForm ? (
        <SignUpForm
          formValues={signUpValues}
          handleChange={handleLoginFormChange}
          handleSignUp={handleSignUp}
          switchMode={switchMode}
          fadeIn={fadeIn}
        />
      ) : (
        <LoginForm
          formValues={loginValues}
          handleChange={handleSignUpFormChange}
          handleLogin={handleLogin}
          switchMode={switchMode}
          fadeIn={fadeIn}
        />
      )}
    </div>
  );
};
