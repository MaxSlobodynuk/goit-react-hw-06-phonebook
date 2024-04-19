import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../../redux/selectors';
import { delateContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filterValue = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: <span>{contact.number}</span>
            <button
              className="btn-close"
              onClick={() => dispatch(delateContact(contact.id))}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
