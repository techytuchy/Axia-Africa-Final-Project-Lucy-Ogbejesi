import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-purple-800 text-gray-200 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div className="flex items-center space-x-3">
          <img
            src="tuchy stores logo.png"
            alt="Tuchy Stores"
            className="w-10 h-10 rounded-lg"
          />
          <h1 className="text-white font-bold text-lg">Tuchy Stores</h1>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
          <Link to="/" className="hover:text-purple-500">
            Home
          </Link>
          <Link to="/" className="hover:text-purple-500">
            About
          </Link>
          <Link to="/" className="hover:text-purple-500">
            Contact
          </Link>
          <Link to="/login" className="hover:text-purple-500">
            Login
          </Link>
          <Link to="/signup" className="hover:text-purple-500">
            Sign Up
          </Link>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-purple-500">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-purple-500">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-purple-500">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-purple-500">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="border-t border-white-700 mt-6 pt-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Tuchy Stores. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
