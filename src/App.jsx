import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import contacts from "./contacts.json";

function App() {
  const [contactList, setContactList] = useState(contacts);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContactList([...contactList, newContact]);
  };

  const deleteContact = (contactId) => {
    setContactList((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
