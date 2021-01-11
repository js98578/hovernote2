import React, { useEffect, useState } from 'react';
import Left from './Left';
import { NotesProvider } from '../contexts/NotesContext';
import NoteList from './NoteList';
import NoteEdit from './NoteEdit';
import { TransitionFadeInOnMount } from './TransitionFadeInOnMount';

export const Notes = () => {
  return (
    <NotesProvider>
      <TransitionFadeInOnMount
        render={styles => (
          <div style={styles} className="flex flex-row h-screen">
            <div className="border-r-1 border-gray-800 flex flex-col justify-between py-4 shadow-xl">
              <Left />
            </div>
            <div className="overflow-y-scroll flex-1">
              <NoteList />
            </div>
            <div className="border-l border-gray-200 bg-gray-100 flex-1">
              <NoteEdit></NoteEdit>
            </div>
          </div>
        )}
      />
    </NotesProvider>
  );
};
