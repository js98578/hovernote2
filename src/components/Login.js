
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import { login } from '../services/loginService';
import { FragmentWithErrorHandling } from './FragmentWithErrorHandlingHOC';
import { FragmentWithLoading } from './FragmentWithLoadingHOC';

const useStyles = makeStyles((theme) => ({
  progress: {
    margin: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  },
  title: {
    fontSize: '150%',
  }
}));

export const Login = () => {
  const classes = useStyles();
  const [userValues, setUserValues] = useState({
    email: '',
    password: '',
  });
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [errorSnackBarMessage, setErrorSnackbarMessage] = useState(null);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

  const handleErrorSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorSnackbarOpen(false);
  };

  const handleChange = (name) => (event) => {
    setUserValues({ ...userValues, [name]: event.target.value });
  };

  const handleLogin = async () => {
    setLoadingStatus(true);
    try {
      await login(userValues.username, userValues.password);
    } catch (e) {
      setErrorSnackbarMessage(e.message);
      setErrorSnackbarOpen(true);
    }
    setLoadingStatus(false);
  };

  return (
    <FragmentWithErrorHandling showError={errorSnackbarOpen} handleClose={handleErrorSnackbarClose} message={errorSnackBarMessage}>
      <FragmentWithLoading showLoading={loadingStatus}>
        <div className={classes.loginForm}>
          <h1 className={classes.title}>HOVERNOTE</h1>
          <TextField
            id="outlined-name"
            label="Email"
            className={classes.textField}
            value={userValues.email}
            onChange={handleChange('email')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Password"
            className={classes.textField}
            value={userValues.password}
            onChange={handleChange('password')}
            margin="normal"
            variant="outlined"
          />
          <Button
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </FragmentWithLoading>
    </FragmentWithErrorHandling>
  );
};
