import React, { useState, useEffect, useContext, useCallback } from 'react';
import { getAllNotes, getNotesByNoteStack, saveNote } from '../services/notesService';
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
  const [activeNoteStack, setActiveNoteStack] = useState('');
  const [isAllNotes, setIsAllNotes] = useState(true);
  const [noteStackLoading, setNoteStackLoading] = useState(false);
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

  const getNotes = useCallback(async () => {
    try {
      setNoteStackLoading(true);
      let noteListResponse = []
      if (isAllNotes) {
        noteListResponse = await getAllNotes(userInfo.username);
      } else {
        noteListResponse = await getNotesByNoteStack(activeNoteStack);
      }
      setNoteList(noteListResponse);
    } catch (err) {
      console.log(err);
    }
    setNoteStackLoading(false);
  }, [activeNoteStack, userInfo.username]);

  useEffect(() => {
    getNotes();
  }, [userInfo, activeNoteStack, getNotes]);

  const sendNewNote = async () => {
    try {
      await saveNote(note);
      getNotes();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <NotesContext.Provider
      value={{
        note,
        setNote,
        noteList,
        setNoteList,
        setNoteTitle,
        setNoteContent,
        sendNewNote,
        activeNoteStack,
        setActiveNoteStack,
        setNoteStackLoading,
        noteStackLoading,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const NotesConsumer = NotesContext.Consumer;
