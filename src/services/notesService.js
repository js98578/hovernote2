import Axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getAllNotes = async id => {
  const notes = await Axios.get(`${apiUrl}notes/get-users-notes/${id}`);
  return notes;
};

export const saveNote = async () => {
  const note = await Axios.post(`${apiUrl}notes/`);
  return note;
};
 