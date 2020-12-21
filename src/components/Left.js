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
    <>
      <Search />
      <PrimaryMenu />
      <NoteStackList />
      <div
        className="flex justify-center items-center cursor-pointer hover:bg-gray-200"
        onClick={handleLogout}
      >
        <div className="">
          <h1 className="font-sans font-light text-3xl text-teal-500">Logout</h1>
        </div>
      </div>
    </>
  );
};

const styles = {
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
};

export default Left;
