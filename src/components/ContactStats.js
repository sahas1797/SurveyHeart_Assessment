// src/components/ContactStats.js
import React from 'react';

const ContactStats = ({ contacts }) => {
  const totalContacts = contacts.length;
  const totalMales = contacts.filter(contact => contact.gender === 'Male').length;
  const totalFemales = contacts.filter(contact => contact.gender === 'Female').length;
  const totalPersonal = contacts.filter(contact => contact.type === 'Personal').length;
  const totalBusiness = contacts.filter(contact => contact.type === 'Business').length;

  return (
    <div>
      <h2>Contact Statistics</h2>
      <p>Total Contacts: {totalContacts}</p>
      <p>Male Contacts: {totalMales}</p>
      <p>Female Contacts: {totalFemales}</p>
      <p>Personal Contacts: {totalPersonal}</p>
      <p>Business Contacts: {totalBusiness}</p>
    </div>
  );
};

export default ContactStats;
