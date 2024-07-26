export interface ContactProps {
  name: string;
  number: string;
  id: string;
  onDelete: (id: string) => void;
}
