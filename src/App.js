import React from 'react';
import { Hovernote } from './Hovernote';
import { StatusProvider } from './contexts/StatusContext';
import { Status } from './components/Status';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <StatusProvider>
        <AuthProvider>
          <Status>
            <Hovernote />
          </Status>
        </AuthProvider>
      </StatusProvider>
    </div>
  );
}

export default App;
