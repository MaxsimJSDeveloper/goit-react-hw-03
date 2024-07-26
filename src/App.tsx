import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import contacts from "./contacts.json";

interface ContactsState {
  id: string;
  name: string;
  number: string;
}

function App() {
  const [contactList, setContactList] = useState<ContactsState[]>(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : [...contacts];
  });

  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const addContact = (newContact: ContactsState): void => {
    setContactList([...contactList, newContact]);
  };

  const deleteContact = (contactId: string): void => {
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
