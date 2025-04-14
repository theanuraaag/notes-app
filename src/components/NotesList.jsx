import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote, handleTogglePinNote }) => {
  // Update the pinned status of a note
  const handleTogglePinNoteHandler = (id, isPinned) => {
    handleTogglePinNote(id, isPinned);  // This will update the state in App.jsx
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          pinned={note.pinned}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
          handleTogglePinNote={handleTogglePinNote}  // Pass the function to toggle pin status
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
