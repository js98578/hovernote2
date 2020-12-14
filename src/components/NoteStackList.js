import React from 'react';
import { IoAddSharp } from "react-icons/io5";

const NoteStackList = () => {
  return (
    <>
      <div className="text-blue-400 flex justify-between">
        <div className="font-sans font-light" >Notebooks</div>
        <div className="bg-gray-200 hover:bg-gray-300 cursor-pointer ">
          <IoAddSharp />
        </div>
      </div>
    </>
  );
};

export default NoteStackList;
