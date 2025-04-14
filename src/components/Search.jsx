import React, { useRef, useEffect } from 'react';

const Search = ({ handleSearchNote, searchText }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []); // focus only once when mounted

  return (
    <div className="my-4">
      <input
        type="text"
        ref={inputRef}
        placeholder="Search notes..."
        
        value={searchText}
        onChange={(event) => handleSearchNote(event.target.value)}
        className="w-full px-4 py-2 text-base rounded-md  shadow-sm focus:outline-none dark:bg-[#e1e1e1] dark:text-grey placeholder-gray-500 dark:placeholder-gray-900"
      />
    </div>
  );
};

export default Search;
