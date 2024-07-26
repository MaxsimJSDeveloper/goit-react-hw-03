export interface ContactListProps {
  contacts: Contact[];
  onDelete: (contactId: string) => void;
}

interface Contact {
  id: string;
  name: string;
  number: string;
}
