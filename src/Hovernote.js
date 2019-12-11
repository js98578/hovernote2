import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import React, { useContext } from 'react';
import Login from './components/Login';
import { Notes } from './components/Notes';
import { token } from './services/loginService';
import { AuthContext } from './contexts/AuthContext';

export const Hovernote = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Switch>
      <Route exact path="/">
        {!isAuthenticated ? <Login /> : <Redirect to="/notes/" />}
      </Route>
      <Route path="/notes/">{!isAuthenticated ? <Redirect to="/login/" /> : <Notes />}</Route>
      <Route
        path="/login/"
        render={() => (!isAuthenticated ? <Login /> : <Redirect to="/notes/" />)}
      />
    </Switch>
  );
};
