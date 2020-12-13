import React from 'react';
import PrimaryMenu from './PrimaryMenu';
import Search from './Search';
import NoteStackList from './NoteStackList';
import { logout } from '../services/loginService';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

const Left = props => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return (
    <div className="border-r-1 border-gray-600 p-6">
      <Search />
      <PrimaryMenu />
      <NoteStackList />
      <div className="flex justify-end" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
};

const styles = {
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
};

export default Left;
