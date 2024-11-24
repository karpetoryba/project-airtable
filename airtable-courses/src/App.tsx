import { useEffect, useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Clients } from "./utils/types/client";
import ClientForm from "./components/pages/Home";
import { getClients } from "./utils/airtable";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";

function App() {
  const [clients, setClients] = useState<Clients>([]);

  useEffect(() => {
    getClients(setClients);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <h1 className="text-xl font-bold">My App</h1>
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

          <main className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home setClients={setClients} />} />
              <Route path="/admin" element={<Admin clients={clients} />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
