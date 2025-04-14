import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="bg-yellow-200 rounded-lg p-4 flex flex-col justify-between min-h-[170px] shadow-md">
      <span className="text-sm text-black break-words">{text}</span>
      <div className="flex items-center justify-between text-sm mt-2">
        <small className="text-gray-600">{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="cursor-pointer text-red-500 hover:text-red-700 text-lg"
        />
      </div>
    </div>
  );
};

export default Note;
