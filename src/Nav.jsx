import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-4 sm:px-8 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img
            src="tuchy stores logo.png"
            width="50"
            height="50"
            alt="fashion"
            className="rounded-lg"
          />
          <h1 className="text-xl font-bold">
            <Link to="/">Tuchy Stores</Link>
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-purple-600">
            Home
          </Link>
          <Link to="/" className="text-gray-600 hover:text-purple-600">
            About
          </Link>
          <Link to="/" className="text-gray-600 hover:text-purple-600">
            Contact
          </Link>
          <Link to="/login" className="text-purple-600 font-semibold">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Sign Up
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2">
          <Link
            to="/"
            className="block text-gray-600 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/"
            className="block text-gray-600 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/"
            className="block text-gray-600 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="block text-purple-600 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
