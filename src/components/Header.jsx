import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const Header = ({ handleToggleDarkMode, user, darkMode }) => {
  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  return (
    <div
      className={`flex justify-between items-center py-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <h1 className="text-4xl font-bold">Notes App</h1>

      <div className="flex gap-4 items-center">
        {/* Theme toggle icon */}
        <button
          onClick={() => handleToggleDarkMode((prev) => !prev)}
          className="text-xl"
          title="Toggle Dark Mode"
        >
          {darkMode ? (
            <MdLightMode size={24} color="white" />
          ) : (
            <MdDarkMode size={24} color="black" />
          )}
        </button>

        {/* Auth buttons */}
        {!user ? (
          <>
            <Link to="/login">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-[10px] py-[5px] text-sm bg-[#e1e1e1] rounded-[15px] text-white hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
