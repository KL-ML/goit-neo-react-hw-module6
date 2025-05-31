import toast, { Toaster } from 'react-hot-toast';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { IoSearchOutline } from 'react-icons/io5';
import css from './SearchBar.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit, isDisabled }) {
  const nameFieldId = useId();
  const handleSubmit = values => {
    if (values.search === '') {
      toast.error('Please enter search term!');
      return;
    }
    onSubmit(values.search.trim().toLowerCase());
  };

  return (
    <>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <ButtonIcon
            type="submit"
            icon={IoSearchOutline}
            iconSize={20}
            variant="search"
            isDisabled={isDisabled}
          ></ButtonIcon>
          <Field
            className={css.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.errorMessage}
            name="search"
            component="span"
          />
        </Form>
      </Formik>
      <Toaster />
    </>
  );
}

SearchBar.PropTypes = {
  onSearch: PropTypes.func,
  isDisabled: PropTypes.bool,
};
