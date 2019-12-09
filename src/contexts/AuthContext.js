import React, { useState } from 'react';
import { token } from '../services/loginService';

export const AuthContext = React.createContext();

export const AuthProvider = props => {
  const { children } = props;

  const [isToken, setIsToken] = useState(false);

  const getTokenFromLocalStorage = () => {
    return token;
  };

  return (
    <AuthContext.Provider
      value={{
        getTokenFromLocalStorage,
        isToken,
        setIsToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
