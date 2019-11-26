import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'absolute',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

const withLoading = WrappedComponent => ({ showLoading, children }) => {
  const classes = useStyles();

  return (
    <WrappedComponent>
      <div className={classes.root}>{showLoading && <LinearProgress />}</div>
      {children}
    </WrappedComponent>
  );
};

export const FragmentWithLoading = withLoading(({ children }) => <>{children}</>);
