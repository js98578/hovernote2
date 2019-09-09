import React from 'react';
import logo from './logo.svg';
import {Hovernote} from "./Hovernote";
import { ThemeProvider } from '@material-ui/styles';

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
//<ThemeProvider theme={theme}>
//</ThemeProvider>


function App() {
  return (
    <div className="App" >
      <Hovernote />
    </div>
  );
}

export default App;
