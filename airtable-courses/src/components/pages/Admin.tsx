import { useEffect, useState } from "react";
import { getClients } from "../../utils/airtable";
import { Clients, Client } from "../../utils/types/client";
import deleteClient from "../../utils/airtable/deleteClient";
import editClient from "../../utils/airtable/editClient";
import EditClientForm from "./editPage";

interface AdminProps {
  clients: Clients;
  setClients: React.Dispatch<React.SetStateAction<Clients>>;
}

function Admin({ clients, setClients }: AdminProps) {
  const [editingClient, setEditingClient] = useState<Client | null>(null);

  useEffect(() => {
    getClients(clients);
  }, []);

  const handleDelete = async (id: string) => {
    await deleteClient(id);
    setClients((prevClients) =>
      prevClients.filter((client) => client.id !== id)
    );
  };

  const handleUpdate = async (id: string, updatedData: Partial<Client>) => {
    await editClient(id, updatedData, setClients);
    setEditingClient(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Admin Panel</h2>
      {editingClient ? (
        <EditClientForm
          client={editingClient}
          onSave={(updatedClient) =>
            handleUpdate(editingClient.id, updatedClient)
          }
          onCancel={() => setEditingClient(null)}
        />
      ) : (
        <div className="rounded-lg shadow-md overflow-hidden bg-white">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="px-6 py-4 text-left font-medium">First Name</th>
                <th className="px-6 py-4 text-left font-medium">Last Name</th>
                <th className="px-6 py-4 text-left font-medium">Email</th>
                <th className="px-6 py-4 text-left font-medium">
                  Phone Number
                </th>
                <th className="px-6 py-4 text-left font-medium">Status</th>
                <th className="px-6 py-4 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr
                  key={client.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="px-6 py-4">{client.firstname}</td>
                  <td className="px-6 py-4">{client.lastname}</td>
                  <td className="px-6 py-4">{client.email}</td>
                  <td className="px-6 py-4">{client.phoneNumber}</td>
                  <td className="px-6 py-4">{client.status}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setEditingClient(client)}
                      className="text-blue-600 hover:underline mr-4"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(client.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Admin;
