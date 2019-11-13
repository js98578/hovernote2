import React from 'react';
import { FragmentWithInfo } from './FragmentWithInfo';
import { FragmentWithLoading } from './FragmentWithLoadingHOC';
import { FragmentWithErrorHandling } from './FragmentWithErrorHandlingHOC';

export const Status = ({
  errorSnackbarOpen, handleErrorSnackbarClose, errorSnackbarMessage,
  infoSnackbarOpen, handleInfoSnackbarClose, infoSnackbarMessage,
  loadingStatus, children
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
);
