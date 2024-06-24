// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({ name: '', gender: 'Male', type: 'Personal' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(formData);
    setFormData({ name: '', gender: 'Male', type: 'Personal' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="Personal">Personal</option>
        <option value="Business">Business</option>
      </select>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
