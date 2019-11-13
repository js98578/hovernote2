import React from 'react';
import { SnackbarWrapper } from './Snackbar';

const withInfo = (WrappedComponent) => ({
  showInfo, message, handleClose, children
}) => (
  <WrappedComponent>
    {showInfo && (
      <SnackbarWrapper
        message={message}
        vertical="bottom"
        horizontal="right"
        show={showInfo}
        handleClose={handleClose}
      />
    )}
    {children}
  </WrappedComponent>
);

export const FragmentWithInfo = withInfo(({ children }) => <>{children}</>);
