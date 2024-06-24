import css from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.contact}>
      <div className={css.data}>
        <p className={css.contactName}>Name: {name}</p>
        <p className={css.contactNumber}>Number: {number}</p>
      </div>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
