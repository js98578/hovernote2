import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { IoSearchOutline } from "react-icons/io5";
import { useRef } from 'react';

const Search = props => {
  const [focused, setFocused] = useState(null);
  const inputRef = useRef(null);

  const focusField = () => {
    inputRef.current.focus();
  }

  return (
    <div
      className={
        focused
          ? 'p-2 group rounded-lg border-teal-300 cursor-text border flex bg-gray-100 group-hover:bg-gray-200'
          : 'p-2 group rounded-lg border-teal-300 cursor-text border  flex group-hover:bg-gray-200'
      }
      onClick={() => focusField()}
    >
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={
          focused
            ? 'w-full focus:outline-none bg-gray-100 group-hover:bg-gray-200'
            : 'w-full focus:outline-none group-hover:bg-gray-200'
        }
        ref={inputRef}
        type="text"
      />
      {!focused && (
        <div className="justify-center items-center flex">
          <IoSearchOutline className="cursor-text w-6 h-6 text-teal-300" onClick={() => focusField()} />
        </div>
      )}
    </div>
  );
};

export default withRouter(Search);
