// ContactListItem.jsx

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
