import React, { useEffect, useState } from 'react';
import * as Space from 'react-spaces';
import { Transition } from 'react-transition-group';
import Left from './Left';
import { NotesProvider } from '../contexts/NotesContext';
import NoteList from './NoteList';
import NoteEdit from './NoteEdit';

export const Notes = () => {
  const [inProp, setInProp] = useState(false);

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <NotesProvider>
      <Transition in={inProp} timeout={500}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <div className="flex flex-row">
              <div className="border-r-1 border-gray-800 flex flex-col justify-between py-4 shadow-xl h-screen w-1/6">
                <Left />
              </div>
              <div className="overflow-y-scroll h-screen w-2/6">
                <NoteList />
              </div>
              <div className="border-l border-gray-200 bg-gray-100 h-screen w-3/6">
                <NoteEdit></NoteEdit>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </NotesProvider>
  );
};
