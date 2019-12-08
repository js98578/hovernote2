import React, { useState } from 'react';

export const StatusContext = React.createContext();

export const StatusProvider = props => {
  const { children } = props;

  const [loadingStatus, setLoadingStatus] = useState(false);
  const [infoSnackbarOpen, setInfoSnackbarOpen] = useState(false);
  const [infoSnackbarMessage, setInfoSnackbarMessage] = useState(null)
  const [errorSnackbarMessage, setErrorSnackbarMessage] = useState(null);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

  const handleErrorSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorSnackbarOpen(false);
  };

  const handleInfoSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setInfoSnackbarOpen(false);
  }

  return (
    <StatusContext.Provider
      value={{
        loadingStatus,
        setLoadingStatus,
        infoSnackbarOpen,
        setInfoSnackbarOpen,
        infoSnackbarMessage,
        setInfoSnackbarMessage,
        errorSnackbarMessage,
        setErrorSnackbarMessage,
        errorSnackbarOpen,
        setErrorSnackbarOpen,
        handleErrorSnackbarClose,
        handleInfoSnackbarClose
      }}
    >
      {children}
    </StatusContext.Provider>
  );

};

export const StatusConsumer = StatusContext.Consumer;
