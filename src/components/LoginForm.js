import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Fade } from '@material-ui/core';

const LoginForm = props => {
  const { formValues, handleChange, handleLogin, switchMode, fadeIn } = props;

  return (
    <Fade in={fadeIn} timeout={300}>
      <Paper className="flex flex-col p-8 min-w-0" elevation={5}>
        <h1 className="mb-4 justify-center text-4xl text-gray-400">LOGIN</h1>
        <TextField
          id="outlined-email-login"
          label="Email"
          className="min-w-300"
          value={formValues.email}
          onChange={handleChange('email')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password"
          label="Password"
          className="min-w-300"
          value={formValues.password}
          onChange={handleChange('password')}
          margin="normal"
          variant="outlined"
          type="password"
        />
        <div className="mt-6 flex justify-between">
          <Button onClick={switchMode}>Sign up</Button>
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </Paper>
    </Fade>
  );
};

export default LoginForm;
