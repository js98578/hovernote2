import React, { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import { token } from '../services/loginService';

export const AuthContext = React.createContext();

export const AuthProvider = props => {
  const { children } = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getTokenFromLocalStorage = () => {
    return token;
  };

  const authentication = useCallback(
    authenticate => {
      setIsAuthenticated(authenticate);
      if (authenticate) {
        Axios.defaults.headers.common.Authorization = getTokenFromLocalStorage();
        return;
      }
      Axios.defaults.headers.common.Authorization = null;
    },
    [setIsAuthenticated]
  );

  useEffect(() => {
    if (getTokenFromLocalStorage()) {
      authentication(true);
    } else {
      authentication(false);
    }
  }, [authentication]);

  return (
    <AuthContext.Provider
      value={{
        getTokenFromLocalStorage,
        isAuthenticated,
        setIsAuthenticated,
        authentication
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
