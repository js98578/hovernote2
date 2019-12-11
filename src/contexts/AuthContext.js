import React, { useState, useEffect } from 'react';
import { token } from '../services/loginService';

export const AuthContext = React.createContext();

export const AuthProvider = props => {
  const { children } = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getTokenFromLocalStorage = () => {
    return token;
  };

  useEffect(() => {
    if (getTokenFromLocalStorage()) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        getTokenFromLocalStorage,
        isAuthenticated,
        setIsAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
