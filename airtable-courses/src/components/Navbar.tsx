import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">My App</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/admin" className="hover:underline">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
