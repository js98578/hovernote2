import React from 'react';
import { Hovernote } from './Hovernote';
import { StatusProvider } from './contexts/StatusContext';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
      <StatusProvider>
        <Status>
          <Hovernote />
        </Status>
      </StatusProvider>
    </div>
  );
}

export default App;
