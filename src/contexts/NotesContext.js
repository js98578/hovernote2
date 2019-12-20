import React, { useState, useEffect } from 'react';
import { getAllNotes } from '../services/notesService';

export const NotesContext = React.createContext();

export const NotesProvider = props => {
  const { children } = props;

  const [note, setNote] = useState(null);
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    setNoteList(getAllNotes());
  }, []);

  return (
    <NotesContext.Provider value={{ note, setNote, noteList, setNoteList }}>
      {children}
    </NotesContext.Provider>
  );
};

export const NotesConsumer = NotesContext.Consumer;
