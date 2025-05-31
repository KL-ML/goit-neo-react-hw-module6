import PropTypes from 'prop-types';

import Contact from '../Contact/Contact';
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <Container variant="innerContainer">
      <Heading variant="cardTitle">
        Contacts <span>| Your contact list</span>
      </Heading>
      <ul className={css.contactsList}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            avatar={
              contact.avatar ||
              'https://cdn-icons-png.flaticon.com/512/2922/2922506.png'
            }
            onDelete={onDelete}
            id={contact.id}
          />
        ))}
      </ul>
    </Container>
  );
}

ContactList.PropTypes = {
  contacts: PropTypes.object,
  onDelete: PropTypes.func,
};