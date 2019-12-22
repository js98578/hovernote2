import React, { useState, useEffect, useContext } from 'react';
import { getAllNotes } from '../services/notesService';
import { AuthContext } from './AuthContext';

export const NotesContext = React.createContext();

export const NotesProvider = props => {
  const { children } = props;

  const [note, setNote] = useState(null);
  const [noteList, setNoteList] = useState([]);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const getNotes = async () => {
      try {
        setNoteList(await getAllNotes(userInfo.id));
      } catch (err) {
        console.log(err);
      }
    };
    getNotes();
  }, [userInfo]);

  return (
    <NotesContext.Provider value={{ note, setNote, noteList, setNoteList }}>
      {children}
    </NotesContext.Provider>
  );
};

export const NotesConsumer = NotesContext.Consumer;
