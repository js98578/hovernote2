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
    <div className="border-r-1 border-gray-800 justify-between flex flex-col p-4 shadow-lg">
      <Search />
      <PrimaryMenu />
      <NoteStackList />
      <div
        className="flex justify-center items-center"
        onClick={handleLogout}
      >
        <div className="">
          <h1 className="px-4 font-sans font-light text-3xl text-teal-300 cursor-pointer rounded-lg hover:bg-gray-200">Logout</h1>
        </div>
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
