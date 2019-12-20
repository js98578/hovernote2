import Divider from '@material-ui/core/Divider';
import React from 'react';
import PrimaryMenu from './PrimaryMenu';
import Search from './Search';
import NoteStackList from './NoteStackList';

const Left = () => {

  return (
    <>
      <div className="border-r-1 border-gray-600">
        <Search />
        <PrimaryMenu />
        <Divider />
        <NoteStackList />
      </div>
    </>
  );
};

export default Left;
