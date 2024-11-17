import { useEffect } from "react";
import { connectAirtable } from "./utils/airtable";
import "./App.css";

function App() {
  useEffect(() => {
    connectAirtable();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Airtable Integration</h1>
    </div>
  );
}

export default App;
