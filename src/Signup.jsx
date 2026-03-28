import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";

function Signup() {
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();

    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="bg-white p-8 rounded-2xl shadow-lg mx-auto mt-5 max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an account
        </h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
