import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = ev => {
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  addContactOnPhonebook = ev => {
    ev.preventDefault();
    this.props.onSubmit({
      name: ev.currentTarget.name.value,
      number: ev.currentTarget.number.value,
      id: uuidv4(),
    });

    this.clearInput();
  };

  clearInput() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.addContactOnPhonebook}>
        <label>Name</label>
        <input
          value={this.state.name}
          onChange={this.onChangeInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов.
         Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <label>Number</label>
        <input
          type="tel"
          value={this.state.number}
          onChange={this.onChangeInput}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
