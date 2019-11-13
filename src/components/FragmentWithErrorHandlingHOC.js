import React from 'react';
import { SnackbarWrapper } from './Snackbar';

const withErrorHandling = (WrappedComponent) => ({
  showError, message, handleClose, children
}) => (
  <WrappedComponent>
    {showError && (
      <SnackbarWrapper
        message={message}
        vertical="top"
        horizontal="right"
        show={showError}
        handleClose={handleClose}
      />
    )}
    {children}
  </WrappedComponent>
);

export const FragmentWithErrorHandling = withErrorHandling(({ children }) => <>{children}</>);
