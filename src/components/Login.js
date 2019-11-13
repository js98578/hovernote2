import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import { login } from '../services/loginService';
import { Status } from './Status';

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
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
}));

export const Login = () => {
  const classes = useStyles();
  const [userValues, setUserValues] = useState({
    email: '',
    password: '',
  });
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [infoSnackbarOpen, setInfoSnackbarOpen] = useState(false);
  const [infoSnackbarMessage, setInfoSnackbarMessage] = useState(null)
  const [errorSnackBarMessage, setErrorSnackbarMessage] = useState(null);
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

  const handleChange = (name) => (event) => {
    setUserValues({
      ...userValues,
      [name]: event.target.value
    });
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
    <Status
      errorSnackbarOpen={errorSnackbarOpen}
      handleErrorSnackbarClose={handleErrorSnackbarClose}
      errorSnackbarMessage={errorSnackBarMessage}
      infoSnackbarOpen={infoSnackbarOpen}
      handleInfoSnackbarClose={handleInfoSnackbarClose}
      infoSnackbarMessage={infoSnackbarMessage}
      loadingStatus={loadingStatus}
    >
      <div className={classes.loginForm}>
        <h1 className={classes.title}>HOVERNOTE</h1>
        <TextField
          id="outlined-email"
          label="Email"
          className={classes.textField}
          value={userValues.email}
          onChange={handleChange('email')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password"
          label="Password"
          className={classes.textField}
          value={userValues.password}
          onChange={handleChange('password')}
          margin="normal"
          variant="outlined"
        />
        <div className={classes.buttons}>
          <Button
            onClick={handleLogin}
          >
            Sign up
          </Button>
          <Button
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </div>
    </Status>
  );
};
