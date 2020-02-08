import React, { useState, useEffect, useContext } from 'react';
import { getAllNotes } from '../services/notesService';
import { AuthContext } from './AuthContext';

export const NotesContext = React.createContext();

export const NotesProvider = props => {
  const { children } = props;

  const [note, setNote] = useState(null);
  const [noteList, setNoteList] = useState([]);
  const [noteTitle, setNoteTitle] = useState(null);
  const [noteContent, setNoteContent] = useState(null);
  const [newNote, setNewNote] = useState(true);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const noteListResponse = await getAllNotes(userInfo.id);
        setNoteList(noteListResponse);
      } catch (err) {
        console.log(err);
      }
    };
    getNotes();
  }, [userInfo]);

  return (
    <NotesContext.Provider
      value={{
        note,
        setNote,
        noteList,
        setNoteList,
        newNote,
        setNewNote,
        noteTitle,
        setNoteTitle,
        noteContent,
        setNoteContent
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const NotesConsumer = NotesContext.Consumer;
