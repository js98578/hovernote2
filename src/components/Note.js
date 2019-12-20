import React, { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext';

const Note = () => {
  const { note } = useContext(NotesContext);

  return (
    <div>
      {note ? (
        <div>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Note;
