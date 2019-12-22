import React, { useContext, useMemo } from 'react';
import { NotesContext } from '../contexts/NotesContext';

const NoteList = () => {
  const { noteList, setNote } = useContext(NotesContext);

  const notes = useMemo(() => {
    return noteList instanceof Array && noteList.map(note => (
      <div>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
      </div>
    ));
  }, [noteList]);

  return <>{notes}</>;
};

export default NoteList;
