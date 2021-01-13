import React, { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext';

const PrimaryMenu = () => {
  const { setNoteNew, setActiveNoteStack } = useContext(NotesContext);
  return (
    <div className="flex text-gray-700 my-10 font-sans font-light text-3xl flex-col">
      <div className="pr-8 pl-10 cursor-pointer hover:bg-gray-200">New note</div>
      <div
        className="pr-8 pl-10 cursor-pointer hover:bg-gray-200 mt-3"
        onClick={() => setActiveNoteStack('AN')}
      >
        All notes
      </div>
    </div>
  );
};

export default PrimaryMenu;
