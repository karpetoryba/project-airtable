import { Client, Clients } from "../types/client";
import connectAirtable from "./connect";

const editClient = (
  clientId: string,
  updatedFields: Partial<Client>,
  setClients: React.Dispatch<React.SetStateAction<Clients>>
) => {
  const base = connectAirtable();
  const TABLE_NAME = "clientList";
  const table = base(TABLE_NAME);

  const updatedClient = {
    id: clientId,
    fields: updatedFields,
  };

  table.update([updatedClient], (error, records) => {
    if (error) {
      console.error("Error updating client:", error);
      return;
    }
    if (!records) {
      return;
    }
    for (const record of records) {
      setClients((previousClients) =>
        previousClients.map((client) =>
          client.id === record.id ? { id: record.id, ...record.fields } : client
        )
      );
    }
  });
};

export default editClient;
