import React, { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import { userInfoFromLocalStorage } from '../services/loginService';

export const AuthContext = React.createContext();

export const AuthProvider = props => {
  const { children } = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const getUserInfoFromLocalStorage = useCallback(() => {
    return userInfoFromLocalStorage;
  }, []);

  const authentication = useCallback((authenticate, newUserInfo) => {
    setUserInfo(newUserInfo);
    setIsAuthenticated(authenticate);
    if (authenticate) {
      Axios.defaults.headers.common.Authorization = `bearer ${newUserInfo.token}`;
      return;
    }
    Axios.defaults.headers.common.Authorization = null;
  }, []);

  useEffect(() => {
    if (getUserInfoFromLocalStorage()) {
      authentication(true, getUserInfoFromLocalStorage());
    } else {
      authentication(false, getUserInfoFromLocalStorage());
    }
  }, [authentication, getUserInfoFromLocalStorage]);

  return (
    <AuthContext.Provider
      value={{
        getUserInfoFromLocalStorage,
        isAuthenticated,
        setIsAuthenticated,
        authentication,
        userInfo,
        setUserInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
