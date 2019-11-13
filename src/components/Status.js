import React from 'react';
import { FragmentWithInfo } from './FragmentWithInfo';
import { FragmentWithLoading } from './FragmentWithLoadingHOC';
import { FragmentWithErrorHandling } from './FragmentWithErrorHandlingHOC';
import { StatusConsumer } from '../contexts/StatusContext';

export const Status = ({
  children
}) => (
  <StatusConsumer>
    {({
      loadingStatus,
      infoSnackbarOpen,
      infoSnackbarMessage,
      errorSnackbarMessage,
      errorSnackbarOpen,
      handleErrorSnackbarClose,
      handleInfoSnackbarClose
    }) => (
      <FragmentWithErrorHandling
        showError={errorSnackbarOpen}
        handleClose={handleErrorSnackbarClose}
        message={errorSnackbarMessage}
      >
        <FragmentWithInfo
          showInfo={infoSnackbarOpen}
          handleClose={handleInfoSnackbarClose}
          message={infoSnackbarMessage}
        >
          <FragmentWithLoading
            showLoading={loadingStatus}
          >
            {children}
          </FragmentWithLoading>
        </FragmentWithInfo>
      </FragmentWithErrorHandling>
    )}
  </StatusConsumer>
);
