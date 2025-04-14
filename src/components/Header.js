import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Header = ({ handleToggleDarkMode, user, darkMode }) => {
  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Notes App</h1>

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        {/* Theme toggle icon */}
        <button
          onClick={() => handleToggleDarkMode((prev) => !prev)}
          className="icon-button"
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
              <button className="save">Login</button>
            </Link>
            <Link to="/signup">
              <button className="save">Sign Up</button>
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className="save">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
