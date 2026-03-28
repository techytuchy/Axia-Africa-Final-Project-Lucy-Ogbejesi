import { Link } from "react-router-dom";
import Nav from "./Nav";

function LandingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />

      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Seamless Shopping at Your Fingertips
        </h2>
        <p className="text-gray-600 mb-6">
          Buy quality women's and men's wears and stand out.
        </p>

        <Link
          to="/dashboard"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Start Shopping
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 bg-purple-600">
        <div className="bg-white p-6 rounded-xl shadow-900">
          <h3 className="font-bold text-xl mb-2"> Luxury wears</h3>
          <p className="text-gray-600">Look stylish effortlessly.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl mb-2">Affordable prices</h3>
          <p className="text-gray-600">
            Don't break the bank to stock your wardrobe.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl mb-2">Swift Delivery</h3>
          <p className="text-gray-600">
            Get your orders with a snap of a finger.
          </p>
        </div>
      </section>

      <section className="text-center px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We are a classy clothing store that prides in serving our customers
          with the best looks in their day to day lives to elevate their
          confidence in any room they step into.
        </p>
      </section>

      <footer className="bg-purple-900 text-white text-center py-6">
        <p>© 2026 Tuchy's Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
