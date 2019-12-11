import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { login, signUp } from '../services/loginService';
import { StatusContext } from '../contexts/StatusContext';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { AuthContext } from '../contexts/AuthContext';

const Login = props => {
  const { setIsAuthenticated } = useContext(AuthContext);

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
    try {
      await login(loginValues.email, loginValues.password);
    } catch (e) {
      setErrorSnackbarMessage(e.message);
      setErrorSnackbarOpen(true);
    }
    setLoadingStatus(false);
    setIsAuthenticated(true);
    props.history.push('/notes/');
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
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      {isSignUpForm ? (
        <SignUpForm
          formValues={signUpValues}
          handleChange={handleSignUpFormChange}
          handleSignUp={handleSignUp}
          switchMode={switchMode}
          fadeIn={fadeIn}
        />
      ) : (
        <LoginForm
          formValues={loginValues}
          handleChange={handleLoginFormChange}
          handleLogin={handleLogin}
          switchMode={switchMode}
          fadeIn={fadeIn}
        />
      )}
    </div>
  );
};

export default withRouter(Login);
