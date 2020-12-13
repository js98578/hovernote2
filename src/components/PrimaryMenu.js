import React, { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext';

const PrimaryMenu = () => {
  const { setNoteNew } = useContext(NotesContext);
  return (
    <div className="container mx-auto px-4">
      <div>
        New note
      </div>
      <div>
        All notes
      </div>
    </div>
  );
};

export default PrimaryMenu;
