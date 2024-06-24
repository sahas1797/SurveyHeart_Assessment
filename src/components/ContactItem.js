// src/components/ContactItem.js
import React, { useState } from 'react';

const ContactItem = ({ contact, updateContact, deleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(contact);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateContact(formData);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <span>{contact.name} ({contact.gender}, {contact.type})</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default ContactItem;
