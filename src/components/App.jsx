import React, {Component} from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

class App extends Component {
  state = { 
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
   } 

  formSubmit = data => {
    console.log(data);

    const newContact = {
        id: nanoid(),
        name: data.name,
        number: data.number
      };

    this.setState(prevState => ({
   
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }))
  } 

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }


  render() { 
    return (<>
    <h1>Phonebook</h1>
    <ContactForm onSubmit={this.formSubmit}/>
      <lable>
        Find contact by name
        <input
        type="text"
        />
      </lable>
      <h2>Contacts</h2>
      <ContactList contacts={this.state.contacts} onDeleteContact={this.deleteContact}/>
    </>);
  }
}
 
export default App;