import React, {Component} from "react";

class ContactForm extends Component {
    state = { 
        name: '',
        number: '',
     }

     handleChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value})
      }
    
      handleSubmit = e => {
        e.preventDefault(); 

        this.props.onSubmit(this.state);
        this.reset();
      }

      reset = () => {
		this.setState({
			name: '',
			number: ''
		})
	};

    render() { 
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name} 
              onChange={this.handleChange}
              /> 
            </label>
            <label>
            Number
            <input 
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number} 
              onChange={this.handleChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
          );
    }
}
 
export default ContactForm;