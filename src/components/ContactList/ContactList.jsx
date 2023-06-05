import React from "react"
const ContactList = ({contacts, onDeleteContact}) => {
  return (contacts.map(contact => {
    return (<ul>
      <li key={contact.id}>
        <span>{contact.name}:</span>
        <span>{contact.number}</span>
        <button type="button" onClick={()=>onDeleteContact(contact.id)}>Delete</button>
      </li>
      </ul>)
  }))
}

export default ContactList;

