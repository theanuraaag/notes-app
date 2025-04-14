import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config"; // adjust path if needed

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 w-full max-w-md mx-auto bg-gray-100 rounded-lg shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSignup} className="flex flex-col w-full gap-3">
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
          Sign Up
        </button>
      </form>
      <p className="text-sm mt-4 text-center">
    Already have an account?{" "}
    <a
      href="/login"
      className="text-blue-500 hover:underline font-medium"
    >
      Login here
    </a>
  </p>
    </div>
  );
}
