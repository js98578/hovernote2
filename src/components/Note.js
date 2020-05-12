import React, { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext';
import { TextField } from '@material-ui/core';

const Note = () => {
  const { newNote, noteTitle, setNoteTitle, noteContent, setNoteContent } = useContext(
    NotesContext
  );

  return (
    <div>
      {newNote ? (
        <h1 className="mb-4 justify-center text-4xl text-gray-400">NEW</h1>
      ) : (
        <h1 className="mb-4 justify-center text-4xl text-gray-400">EDIT</h1>
      )}
      <div>
        <TextField
          id="outlined-email-login"
          label="Title"
          className="min-w-300"
          value={noteTitle}
          onChange={e => setNoteTitle(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-email-login"
          label="Content"
          className="min-w-300"
          value={noteContent}
          onChange={e => setNoteContent(e.target.value)}
          margin="normal"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Note;
