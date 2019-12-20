import React, { useState } from 'react';
import * as Space from 'react-spaces';
import Left from './Left';
import { NotesProvider } from '../contexts/NotesContext';
import NoteList from './NoteList';
import Note from './Note';

export const Notes = () => {
  return (
    <NotesProvider>
      <Space.ViewPort>
        <Space.LeftResizable scrollable={true} size="15%">
          <Left />
        </Space.LeftResizable>
        <Space.Fill scrollable={true}>
          <div className="border-l border-gray-200 h-screen">
            <NoteList />
          </div>
        </Space.Fill>
        <Space.Right scrollable={true} size="50%">
          <div className="border-l border-gray-200 h-screen">
            <Note></Note>
          </div>
        </Space.Right>
      </Space.ViewPort>
    </NotesProvider>
  );
};
