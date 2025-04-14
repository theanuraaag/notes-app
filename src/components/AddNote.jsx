import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className="bg-yellow-100 rounded-lg p-4 flex flex-col justify-between min-h-[170px] shadow-md">
      <textarea
        rows="4"
        placeholder="Type to add a note..."
        className="bg-transparent resize-none outline-none text-black"
        value={noteText}
        onChange={handleChange}
      />
      <div className="flex items-center justify-between text-black text-sm mt-2">
        <span>{characterLimit - noteText.length} Remaining</span>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
