import { useEffect } from "react";
import { getClients } from "../../utils/airtable";
import { Clients } from "../../utils/types/client";
import deleteClient from "../../utils/airtable/deleteClient";

interface AdminProps {
  clients: Clients;
  setClients: React.Dispatch<React.SetStateAction<Clients>>;
}

function Admin({ clients, setClients }: AdminProps) {
  useEffect(() => {
    getClients(clients);
  }, []);

  const handleDelete = async (id: string) => {
    await deleteClient(id);
    setClients((prevClients) =>
      prevClients.filter((client) => client.id !== id)
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.email} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                {client.firstname}
              </td>

              <td className="border border-gray-300 px-4 py-2">
                {client.lastname}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {client.email}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {client.phoneNumber}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {client.status}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="text-green-500 hover:underline mr-2">
                  Update
                </button>
                <button
                  onClick={() => handleDelete(client.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
