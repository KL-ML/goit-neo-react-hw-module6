import Button from '../Button/Button';
import { GoPlus } from 'react-icons/go';
import css from './ContactForm.module.css';
import Container from '../Container/Container';
import { useId } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';
import Heading from '../Heading/Heading';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required(),
  number: Yup.string()
    .phone('UA', 'Please enter a valid phone number for region UA')
    .required(),
});

const defaultFormValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = ({ name, number }, actions) => {
    dispatch(addContact({ id: nanoid(), name, number }));
    actions.resetForm();
  };
  return (
    <Container variant="outerContainer">
      <Container variant="innerContainer">
        <Heading variant="cardTitle">
          Add <span>| New contact</span>
        </Heading>

        <Formik
          initialValues={defaultFormValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form className={css.form}>
            <label className={css.lable}>
              Name
              <Field
                className={css.field}
                type="text"
                name="name"
                id={nameFieldId}
                placeholder="Kate Middlton"
              />
              <ErrorMessage
                className={css.errorMessage}
                name="name"
                component="span"
              />
            </label>

            <label className={css.lable}>
              Number
              <Field
                className={css.field}
                type="tel"
                name="number"
                id={numberFieldId}
                placeholder="+380975558844"
              />
              <ErrorMessage
                className={css.errorMessage}
                name="number"
                component="span"
              />
            </label>

            <Button
              text="Add contact"
              variant="filled"
              addContact
              icon={GoPlus}
              iconSize={14}
              btnType="submit"
            />
          </Form>
        </Formik>
      </Container>
    </Container>
  );
};

export default ContactForm;
