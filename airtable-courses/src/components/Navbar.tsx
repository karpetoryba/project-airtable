import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          <Link to="/" className="hover:text-gray-600 transition">
            My App
          </Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-500 transition font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className="text-gray-700 hover:text-gray-500 transition font-medium"
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
