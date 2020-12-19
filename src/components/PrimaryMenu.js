import React, { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext';

const PrimaryMenu = () => {
  const { setNoteNew } = useContext(NotesContext);
  return (
    <div className="flex text-gray-700 my-4 font-sans font-light text-3xl flex-col">
      <div className="px-8 cursor-pointer hover:bg-gray-200">New note</div>
      <div className="px-8 cursor-pointer hover:bg-gray-200">All notes</div>
    </div>
  );
};

export default PrimaryMenu;
