import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { login, signUp } from '../services/loginService';
import { StatusContext } from '../contexts/StatusContext';
import { AuthContext } from '../contexts/AuthContext';
import Login from '../components/Login';

const LoginContainer = props => {
  const { authentication } = useContext(AuthContext);

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
    if (loginValues.password === '' || loginValues.email === '') {
      setErrorSnackbarMessage(`An empty field`);
      setErrorSnackbarOpen(true);
      return;
    }

    setLoadingStatus(true);
    let success = false;
    let newUserInfo = null;
    try {
      newUserInfo = await login(loginValues.email, loginValues.password);
      success = true;
    } catch (e) {
      setErrorSnackbarMessage(e.message);
      setErrorSnackbarOpen(true);
    }

    if (success) {
      authentication(true, newUserInfo);
      props.history.push('/notes/');
    }
    setLoadingStatus(false);
  };

  const handleSignUp = async () => {
    if (
      signUpValues.password1 === '' ||
      signUpValues.password2 === '' ||
      signUpValues.email === ''
    ) {
      setErrorSnackbarMessage(`An empty field`);
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
      switchMode();
      clearSignUpForm();
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

  const clearSignUpForm = () => {
    setSignUpValues({
      email: '',
      password1: '',
      password2: ''
    });
  };

  const clearLoginForm = () => {
    setLoginValues({
      email: '',
      password: ''
    });
  };

  const switchMode = () => {
    setFadeIn(true);
    clearSignUpForm();
    clearLoginForm();
    setIsSignUpForm(!isSignUpForm);
  };

  return (
    <Login
      switchMode={switchMode}
      clearLoginForm={clearLoginForm}
      clearSignUpForm={clearSignUpForm}
      handleLoginFormChange={handleLoginFormChange}
      handleSignUpFormChange={handleSignUpFormChange}
      handleSignUp={handleSignUp}
      handleLogin={handleLogin}
      setFadeIn={setFadeIn}
      fadeIn={fadeIn}
      loginValues={loginValues}
      setLoginValues={setLoginValues}
      signUpValues={signUpValues}
      setSignUpValues={setSignUpValues}
      isSignUpForm={isSignUpForm}
    />
  );
};

export default withRouter(LoginContainer);
