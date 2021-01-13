import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Login = props => {
  const {
    isSignUpForm,
    signUpValues,
    handleSignUpFormChange,
    handleSignUp,
    switchMode,
    fadeIn,
    loginValues,
    handleLoginFormChange,
    handleLogin
  } = props;

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
