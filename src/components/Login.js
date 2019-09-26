import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';

import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useState } from '../state/state';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export const Login = () => {
  const classes = useStyles();
  const [{ user }, dispatch] = useState();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });

  };

  return (
    <React.Fragment>
      <TextField
        id="outlined-name"
        label="Email"
        className={classes.textField}
        value={user.email}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Password"
        className={classes.textField}
        value={user.password}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
      <Button
        onClick={() => dispatch({
          type: 'LOGIN',
          payload: {
            email: values.email,
            password: values.password,
          },
        })}
      >
        Login
      </Button>
    </React.Fragment>
  )
}
