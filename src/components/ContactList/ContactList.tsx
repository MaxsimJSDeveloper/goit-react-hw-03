import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { ContactListProps } from "./ContactList.types";

const ContactList: React.FC<ContactListProps> = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactItem}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
