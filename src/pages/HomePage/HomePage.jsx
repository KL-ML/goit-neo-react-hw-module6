import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Description from '../../components/Description/Description';
import ContactList from '../../components/ContactList/ContactList';
import contacts from '../../data/contacts.json';

import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import useLocalStorage from '../../hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import Container from '../../components/Container/Container';

const defaultContactsState = contacts;

export default function HomePage() {
  const [contactsState, setContactsState] = useLocalStorage(
    'contacts',
    defaultContactsState
  );
  const [filter, setFilter] = useState('');

  //filter contacts list for search
  const filtersdContacts = contactsState.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  //get and set values from SearchBox
  function handleInput(value) {
    setFilter(value);
  }

  //add new contact to contacts list
  function handleAddNewContact(data) {
    if (findContact(data.name)) {
      toast.error('Contact with the same name already exists.');
      return;
    }
    setContactsState([
      ...contactsState,
      { id: nanoid(), name: data.name, number: data.number },
    ]);
  }

  //delete contact from comtact list
  function handleDeleteContact(id) {
    setContactsState(contactsState.filter(contact => contact.id != id));
  }

  //find contact in contact list by name
  function findContact(name) {
    return contactsState.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }
  // const [movies, setMovies] = useState([]);

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const trendingEndPoint = '/trending/movie/day';

  return (
    <>
      <Description
        title="Phonebook"
        description="Please add your contacts in the phonebook by filling the form below."
      />
      <ContactForm addContact={handleAddNewContact} />
      {contactsState.length === 0 ? (
        <p>There are no any contacts yet.</p>
      ) : (
        <Container variant="outerContainer">
          <SearchBox onInput={handleInput} inputValue={filter} />
          {filtersdContacts.length === 0 && contactsState.length !== 0 ? (
            <p>There are no contacts with your search.</p>
          ) : (
            <ContactList
              contacts={filtersdContacts}
              onDelete={handleDeleteContact}
            />
          )}
        </Container>
      )}
      <Toaster
        toastOptions={{
          removeDelay: 500,
        }}
      />
    </>
  );
}
