// src/components/ContactList.js
import React, { useState } from 'react';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';
import ContactStats from './ContactStats';
import { dummyContacts } from '../data/contacts';

const ContactList = () => {
  const [contacts, setContacts] = useState(dummyContacts);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact)));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ContactForm addContact={addContact} />
      <ContactStats contacts={contacts} />
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            updateContact={updateContact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
