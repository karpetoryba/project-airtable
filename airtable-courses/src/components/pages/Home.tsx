import React, { useState } from "react";
import { ClientDto, Clients } from "../../utils/types/client";
import { createClient } from "../../utils/airtable";

const ClientForm = ({
  setClients,
}: {
  setClients: React.Dispatch<React.SetStateAction<Clients>>;
}) => {
  const [formData, setFormData] = useState<ClientDto>({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Création du nouveau client");
    createClient(formData, setClients);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg space-y-6 border border-gray-200"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Ajouter un nouveau client
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          name="firstname"
          placeholder="Prénom"
          required
          onChange={handleChange}
          value={formData.firstname}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Nom"
          required
          onChange={handleChange}
          value={formData.lastname}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={formData.email}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Téléphone"
          required
          onChange={handleChange}
          value={formData.phoneNumber}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 transition"
      >
        Ajouter
      </button>
    </form>
  );
};

export default ClientForm;
