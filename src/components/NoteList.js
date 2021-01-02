import React, { useContext, useMemo } from 'react';
import { NotesContext } from '../contexts/NotesContext';

const NoteList = () => {
  const { noteList, noteStackLoading } = useContext(NotesContext);
  console.log(noteList);
  const notes = useMemo(() => {
    return (
      noteList instanceof Array &&
      noteList.map(note => {
/*         if (note.title.length > 60) {
          note.title = note.title.slice(0, 60)+"...";
        } */
        return (
          <div className="p-4 text-gray-700 border-b border-gray-200 break-all h-40">
            <div className="flex flex-col">
              <div className="font-sans text-1xl overflow-hidden truncate">{note.title}</div>
              <div className="font-sans font-light text-xs">{note.lastModifiedDate}</div>
              <div className="font-sans text-xs h-16 overflow-hidden overflow-ellipsis">
                {note.content}
              </div>
            </div>
          </div>
        );
      })
    );
  }, [noteList]);

  const loading = useMemo(() => {
    return (
      <div class="border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-light-blue-400 h-12 w-12"></div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-light-blue-400 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-light-blue-400 rounded"></div>
              <div class="h-4 bg-light-blue-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }, []);

  return <>{noteStackLoading ? loading : notes}</>;
};

export default NoteList;
