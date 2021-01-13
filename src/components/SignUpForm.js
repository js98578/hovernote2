import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Fade } from '@material-ui/core';

const SignUpForm = props => {
  const { formValues, handleChange, handleSignUp, switchMode, fadeIn } = props;

  return (
    <Fade in={fadeIn} timeout={300}>
      <Paper className="flex flex-col p-8 min-w-0" elevation={5}>
        <h1 className="mb-4 justify-center text-4xl text-gray-400">SIGN UP</h1>
        <TextField
          id="outlined-email-signup"
          label="Email"
          className="min-w-300"
          value={formValues.email}
          onChange={handleChange('email')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password1"
          label="Password"
          className="min-w-300"
          value={formValues.password1}
          onChange={handleChange('password1')}
          margin="normal"
          variant="outlined"
          type="password"
        />
        <TextField
          id="outlined-password2"
          label="Password again"
          className="min-w-300"
          value={formValues.password2}
          onChange={handleChange('password2')}
          margin="normal"
          variant="outlined"
          type="password"
        />
        <div className="mt-6 flex justify-between">
          <Button onClick={switchMode}>Login</Button>
          <Button onClick={handleSignUp}>Sign Up</Button>
        </div>
      </Paper>
    </Fade>
  );
};

export default SignUpForm;
