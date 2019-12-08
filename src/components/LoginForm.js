import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Fade } from '@material-ui/core';

const LoginForm = props => {
  const { userValues, handleChange, handleLogin, switchMode, fadeIn } = props;

  return (
    <Fade in={fadeIn} timeout={1000}>
      <Paper className="flex flex-col p-8 min-w-0" elevation={5}>
        <h1 className="mb-4 justify-center text-4xl">LOGIN</h1>
        <TextField
          id="outlined-email"
          label="Email"
          className="min-w-300"
          value={userValues.loginEmail}
          onChange={handleChange('loginEmail')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password"
          label="Password"
          className="min-w-300"
          value={userValues.loginPassword}
          onChange={handleChange('loginPassword')}
          margin="normal"
          variant="outlined"
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
