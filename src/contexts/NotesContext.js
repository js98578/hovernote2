import React, { useState, useEffect, useContext } from 'react';
import { getAllNotes } from '../services/notesService';
import { AuthContext } from './AuthContext';

export const NotesContext = React.createContext();

export const NotesProvider = props => {
  const { children } = props;

  const [note, setNote] = useState({
    title: '',
    content: '',
    id: '',
    new: true
  });
  const [noteList, setNoteList] = useState([]);
  const { userInfo } = useContext(AuthContext);

  const setNoteTitle = title => {
    setNote({
      title,
      content: note.content,
      id: note.id,
      new: note.new
    });
  };

  const setNoteContent = content => {
    setNote({
      title: note.title,
      content,
      id: note.id,
      new: note.new
    });
  };

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
        setNoteTitle,
        setNoteContent,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const NotesConsumer = NotesContext.Consumer;
