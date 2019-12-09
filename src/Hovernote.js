import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import { Notes } from './components/Notes';
import { token } from './services/loginService';

export const Hovernote = () => {
  return (
    <Switch>
      <Route exact path="/">
        {!token ? <Login /> : <Redirect to="/notes/" />}
      </Route>
      <Route path="/notes/">{!token ? <Redirect to="/login/" /> : <Notes />}</Route>
      <Route path="/login/" render={() => (!token ? <Login /> : <Redirect to="/notes/" />)} />
    </Switch>
  );
};
