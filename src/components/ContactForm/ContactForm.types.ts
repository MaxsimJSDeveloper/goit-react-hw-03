export interface ContactFormProps {
  onAddContact: (newContact: Contact) => void;
}

interface Contact {
  id: string;
  name: string;
  number: string;
}
