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
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
    >
      <input
        type="text"
        name="firstname"
        placeholder="Votre Prénom"
        required
        onChange={handleChange}
        value={formData.firstname}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        name="lastname"
        placeholder="Votre Nom"
        required
        onChange={handleChange}
        value={formData.lastname}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre Email"
        required
        onChange={handleChange}
        value={formData.email}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Votre Numéro de Téléphone"
        required
        onChange={handleChange}
        value={formData.phoneNumber}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Créer le nouveau client
      </button>
    </form>
  );
};

export default ClientForm;
