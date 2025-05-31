import Contact from '../Contact/Contact';
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const filteredContacts =
    filter !== '' && contacts.length > 0
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

  return (
    <>
      {filteredContacts.length > 0 ? (
        <Container variant="innerContainer">
          <Heading variant="cardTitle">
            Contacts <span>| Your contact list</span>
          </Heading>

          <ul className={css.contactsList}>
            {filteredContacts.map(contact => (
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
                avatar={
                  contact.avatar ||
                  'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'
                }
                id={contact.id}
              />
            ))}
          </ul>
        </Container>
      ) : filter ? (
        <ErrorMessage message="Search result is empty" />
      ) : (
        <ErrorMessage message="Contact list is empty" />
      )}
    </>
  );
}
