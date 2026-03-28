import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full mx-auto max-w-md mt-5">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to your account
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <div className="flex justify-between items-center mb-6 text-sm">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-purple-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
