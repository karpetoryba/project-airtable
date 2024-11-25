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
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Barre de navigation */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              <Link to="/" className="hover:text-gray-600 transition">
                Clients.ru
              </Link>
            </h1>
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-gray-500 transition font-medium"
                >
                  Accueil
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

        {/* Contenu principal */}
        <main className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home setClients={setClients} />} />
            <Route path="/admin" element={<Admin clients={clients} />} />
          </Routes>
        </main>

        {/* Pied de page */}
        <footer className="bg-white shadow-inner py-4 mt-8">
          <div className="container mx-auto px-6 text-center text-sm text-gray-600">
            &copy; 2024 Mon Application. Tous droits réservés.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
