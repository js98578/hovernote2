import React, { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext';
import { ContentEdit } from './ContentEdit';

const NoteEdit = () => {
  const { newNote, noteTitle, setNoteTitle, noteContent, setNoteContent, sendNewNote } = useContext(
    NotesContext
  );

  return (
    <>
      {newNote ? (
        <h1 className="mb-4 justify-center text-4xl text-gray-400">NEW</h1>
      ) : (
        <h1 className="mb-4 justify-center text-4xl text-gray-400">EDIT</h1>
      )}
      <div>
        <input
          className="min-w-300"
          value={noteTitle}
          onChange={e => setNoteTitle(e.target.value)}
        />
        <ContentEdit></ContentEdit>
      </div>
      <div onClick={() => sendNewNote()}>SEND</div>
    </>
  );
};

export default NoteEdit;
