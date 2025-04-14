import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from './firebase-config';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  deleteDoc,
  doc
} from 'firebase/firestore';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'notes'), where('userId', '==', user.uid));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const userNotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(userNotes);
    });

    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const addNote = async (text) => {
    if (!user) return;
    const date = new Date();
    const note = {
      text,
      date: date.toLocaleDateString(),
      userId: user.uid,
    };

    try {
      await addDoc(collection(db, 'notes'), note);
    } catch (err) {
      console.error('Error adding note: ', err);
    }
  };

  const deleteNote = async (id) => {
    try {
      await deleteDoc(doc(db, 'notes', id));
    } catch (err) {
      console.error('Error deleting note: ', err);
    }
  };

  const NotesPage = () => (
    <>
      <Header handleToggleDarkMode={setDarkMode} user={user} darkMode={darkMode} />
      <Search
  handleSearchNote={setSearchText}
  searchText={searchText}
/>

      
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </>
  );

  return (
    <Router>
      <div className={`${darkMode ? 'dark bg-gray-900 text-white' : ''} min-h-screen flex flex-col md:px-12 lg:px-20 xl:px-40`}>
        <div className="flex-grow">
          <div className="container">
            <Routes>
              <Route path="/" element={user ? <NotesPage /> : <Navigate to="/login" />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />
              {/* Optional 404 page */}
              <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </Routes>
          </div>

        </div>
        <Footer />
      </div>
    </Router>
  );
};


export default App;