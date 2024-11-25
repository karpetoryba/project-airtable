import { useState } from "react";
import { Client } from "../../utils/types/client";

interface EditClientFormProps {
  client: Client;
  onSave: (updatedClient: Partial<Client>) => void;
  onCancel: () => void;
}

const EditClientForm: React.FC<EditClientFormProps> = ({
  client,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<Client>>({
    firstname: client.firstname,
    lastname: client.lastname,
    email: client.email,
    phoneNumber: client.phoneNumber,
    status: client.status,
  });

  const handleInputChange = (field: keyof Client, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">First Name</label>
        <input
          type="text"
          value={formData.firstname}
          onChange={(e) => handleInputChange("firstname", e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Last Name</label>
        <input
          type="text"
          value={formData.lastname}
          onChange={(e) => handleInputChange("lastname", e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Phone Number
        </label>
        <input
          type="text"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Status</label>
        <select
          value={formData.status}
          onChange={(e) => handleInputChange("status", e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="NOT_CONTACTED">Not Contacted</option>
          <option value="CONTACTED">Contacted</option>
          <option value="CONVERTED">Converted</option>
        </select>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditClientForm;
