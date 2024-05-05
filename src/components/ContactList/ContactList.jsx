import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <ContactListItem name={contact.name} number={contact.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
