import React, { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext';

const PrimaryMenu = () => {
  const { setNoteNew } = useContext(NotesContext);
  return (
    <div className="flex font-sans font-light text-3xl flex-col justify-items-center">
      <div className="flex-1 cursor-pointer rounded-lg hover:bg-gray-200">New note</div>
      <div className="flex-1 cursor-pointer rounded-lg hover:bg-gray-200">All notes</div>
    </div>
  );
};

export default PrimaryMenu;
