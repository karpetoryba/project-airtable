import connectAirtable from "./connect";

const deleteClient = async (id: string) => {
  const base = connectAirtable();
  const TABLE_NAME = "clientList";
  const table = base(TABLE_NAME);
  table.destroy([id], (error, deletedRecords) => {
    if (error) {
      console.error(error);
    }
    if (!deletedRecords) {
      return;
    }
    console.log(deletedRecords);
  });
};
export default deleteClient;
