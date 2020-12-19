import React from 'react';
import { IoAddSharp } from "react-icons/io5";

const NoteStackList = () => {
  return (
    <div className="text-teal-500 flex justify-between px-4">
      <div className="font-sans font-light">Notebooks</div>
      <div className="flex px-1 bg-gray-200 hover:bg-gray-300 cursor-pointer items-center">
        <IoAddSharp className="flex-1" />
      </div>
    </div>
  );
};

export default NoteStackList;
