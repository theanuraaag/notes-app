import { useState } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { FaThumbtack } from 'react-icons/fa'; // Pin icon

const Note = ({
  id,
  text,
  date,
  pinned,
  imageUrl,
  handleDeleteNote,
  handleEditNote,
  handleTogglePinNote,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleSave = () => {
    handleEditNote(id, newText);
    setIsEditing(false);
  };

  const togglePin = () => {
    handleTogglePinNote(id, pinned);
  };

  return (
    <div
      className={`bg-yellow-200 rounded-lg p-4 flex flex-col justify-between min-h-[170px] shadow-md ${
        pinned ? 'border-4 border-blue-500' : ''
      }`}
    >
      {/* Render image if imageUrl exists */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="note"
          className="rounded-md mb-2 w-full h-auto object-contain"
        />
      )}

      {/* Note text or edit field */}
      {isEditing ? (
        <textarea
          className="w-full p-2 mb-2 rounded border border-gray-300"
          rows="5"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span className="text-sm text-black break-words">{text}</span>
      )}

      {/* Footer controls */}
      <div className="flex items-center justify-between text-sm mt-2">
        <small className="text-gray-600">{date}</small>
        <div className="flex space-x-2">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
            >
              Save
            </button>
          ) : (
            <MdEdit
              onClick={() => setIsEditing(true)}
              className="cursor-pointer text-blue-500 hover:text-blue-700 text-lg"
            />
          )}
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="cursor-pointer text-red-500 hover:text-red-700 text-lg"
          />
          <FaThumbtack
            onClick={togglePin}
            className={`cursor-pointer text-lg ${
              pinned ? 'text-blue-500' : 'text-gray-500'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
