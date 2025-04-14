
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config"; // adjust path if needed
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/"); // Redirect to home or dashboard after login
        } catch (err) {
          setError(err.message);
        }
      };

  return (
    <div className="flex flex-col items-center justify-center p-5 w-full max-w-md mx-auto bg-gray-100 rounded-lg shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      <form onSubmit={handleLogin} className="flex flex-col w-full gap-3">
        
        <input
          type="email"
          className="p-2 text-sm border border-gray-300 rounded outline-none focus:border-blue-500"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="p-2 text-sm border border-gray-300 rounded outline-none focus:border-blue-500"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
      <p className="text-sm mt-4 text-center">
      Don’t have an account?{" "}
    <a
      href="/signup"
      className="text-blue-500 hover:underline font-medium"
    >
      SignUp
    </a>
  </p>
    </div>
  );
}
