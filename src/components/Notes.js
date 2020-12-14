import React, { useEffect, useState } from 'react';
import * as Space from 'react-spaces';
import { Transition } from 'react-transition-group';
import Left from './Left';
import { NotesProvider } from '../contexts/NotesContext';
import NoteList from './NoteList';
import Note from './Note';

export const Notes = () => {

  const [inProp, setInProp] = useState(false);

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  useEffect(() => {
    setInProp(true)
  }, []);

  return (
    <NotesProvider>
      <Transition in={inProp} timeout={500}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
            <Space.ViewPort>
              <Space.Left size={250}>
                <Left />
              </Space.Left>
              <Space.Fill scrollable={true}>
                <div className="border-l border-gray-200 h-screen">
                  <NoteList />
                </div>
              </Space.Fill>
              <Space.Right size="50%">
                <div className="border-l border-gray-200 h-screen">
                  <Note></Note>
                </div>
              </Space.Right>
            </Space.ViewPort>
          </div>
        )}
      </Transition>
    </NotesProvider>
  );
};
