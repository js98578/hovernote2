import React from 'react';
import {Hovernote} from "./Hovernote";
import { ThemeProvider } from '@material-ui/styles';
import { StateProvider } from './state/state';
import { notelistReducer } from './state/reducers/notelist';
import { userReducer } from './state/reducers/user';

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
//<ThemeProvider theme={theme}>
//</ThemeProvider>

const mainReducer = ({ user, notelist }, action) => ({
  user: userReducer(user, action),
  notelist: notelistReducer(notelist, action)
});

const initialState = {}

function App() {
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={mainReducer}>
        <Hovernote />
      </StateProvider>
    </div>
  );
}

export default App;

