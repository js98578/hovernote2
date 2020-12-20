import Axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getAllNotes = async id => {
  const notes = await Axios.get(`${apiUrl}notes/get-users-notes/${id}`);
  return notes.data;
};

export const saveNote = async note => {
  const savedNote = await Axios.post(`${apiUrl}notes/`, note);
  return savedNote.data;
};

export const getNotesByNoteStack = async noteStackId => {
  return []
}