import css from "./ContactForm.module.css";

import { Field, Form, Formik, ErrorMessage } from "formik";

import { useId } from "react";
import { nanoid } from "nanoid";
import { FeedbackSchema } from "./validation";
import { ContactFormProps } from "./ContactForm.types";

const ContactForm: React.FC<ContactFormProps> = ({ onAddContact }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          id: nanoid(),
          name: values.username,
          number: values.number,
        };
        onAddContact(newContact);
        actions.resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <label htmlFor={nameFieldId} className={css.label}>
          Username
        </label>
        <Field
          type="text"
          name="username"
          id={nameFieldId}
          className={css.inputField}
        />
        <ErrorMessage
          name="username"
          component="span"
          className={css.errorMessage}
        />

        <label htmlFor={phoneFieldId} className={css.label}>
          Phone
        </label>
        <Field
          type="text"
          name="number"
          id={phoneFieldId}
          className={css.inputField}
        />
        <ErrorMessage
          name="number"
          component="span"
          className={css.errorMessage}
        />

        <button type="submit" className={css.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
