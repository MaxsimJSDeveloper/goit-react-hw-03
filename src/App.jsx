import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import contacts from "./contacts.json";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contact, setContacts] = useState(contacts);
  const [filter, setFilter] = useState("");

  const visibleContacts = contact.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactList contacts={visibleContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
    </div>
  );
}

export default App;
