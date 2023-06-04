import React,{ Component } from "react";
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  }

  nameId = nanoid();

  handleChange = e => {
    this.setState({ name: e.target.value });
  }

  handleChangeNumber = e => {
    this.setState({ number: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);
    this.addContact();
  };

  addContact = () => {
    this.setState({...this.state.contacts.push(this.state.name)})
  }


  render() {

    return (
  <div>
      <form onSubmit={this.handleSubmit}>
        <h2>Phonebook</h2>
        <label htmlFor={this.nameId}>Name
        <input
      type="text"
      name="name"
      id={this.nameId}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={this.state.name}
      onChange={this.handleChange}
      />
        </label>
        <label>Number
        <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={this.state.number}
        onChange={this.handleChangeNumber}
        />
        </label>
        <button type="submit">Add contact</button>
      </form>
      <ul>
        <h2>Contacts</h2>
        {this.state.contacts.map((contact)=> <li id={this.nameId}>{contact}</li>)}
      </ul>
  </div>)
    }
}

export default App;
