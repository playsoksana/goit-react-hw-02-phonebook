import React, { Component } from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';

import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContactOnSubmit = data => {
    const contact = {
      name: data.name,
      number: data.number,
      id: data.id,
    };

    this.setState(preventState => ({
      contacts: [contact, ...this.state.contacts],
    }));
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContactOnSubmit} />

        <ContactList contacts={this.state.contacts} />
      </section>
    );
  }
}

export default App;
