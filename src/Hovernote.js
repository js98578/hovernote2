import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import React, { useContext } from 'react';
import Login from './components/Login';
import { Notes } from './components/Notes';
import { AuthContext } from './contexts/AuthContext';
import LoginContainer from './containers/LoginContainer';

export const Hovernote = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Switch>
      <Route exact path="/">
        {!isAuthenticated ? <LoginContainer /> : <Redirect to="/notes/" />}
      </Route>
      <Route path="/notes/">{!isAuthenticated ? <Redirect to="/login/" /> : <Notes />}</Route>
      <Route
        path="/login/"
        render={() => (!isAuthenticated ? <LoginContainer /> : <Redirect to="/notes/" />)}
      />
    </Switch>
  );
};
