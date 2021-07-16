import React, { Component } from 'react';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import Container from './components/Container/Container';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from './helpers/notify';
import './index.css';

class App extends Component {
  static defaultProps = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  state = {
    contacts: [...this.props.contacts],
    filter: '',
  };

  addContactOnSubmit = data => {
    if (
      this.state.contacts.find(({ name }) => name === data.name.toLowerCase())
    ) {
      notify(data.name);
      return;
    }
    const contact = {
      name: data.name.toLowerCase(),
      number: data.number,
      id: data.id,
    };

    this.setState(preventState => ({
      contacts: [contact, ...preventState.contacts],
    }));
  };

  filterOnRender = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  onChangeInputFilter = ({ currentTarget: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  deleteContact = idContact => {
    this.setState(preventState => ({
      contacts: preventState.contacts.filter(({ id }) => id !== idContact),
    }));
  };

  render() {
    const {
      addContactOnSubmit,
      onChangeInputFilter,
      filterOnRender,
      deleteContact,
    } = this;
    const { filter, contacts } = this.state;

    return (
      <section>
        <h1>Phonebook</h1>
        <Container>
          <Form onSubmit={addContactOnSubmit} />
        </Container>

        {contacts.length ? (
          <Container>
            <Filter value={filter} filterContacts={onChangeInputFilter} />
          </Container>
        ) : (
          ''
        )}

        <Container>
          <ContactList
            contactsRender={filterOnRender()}
            deleteContactOnClick={deleteContact}
            contacts={this.state.contacts}
          />
        </Container>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
    );
  }
}

export default App;
