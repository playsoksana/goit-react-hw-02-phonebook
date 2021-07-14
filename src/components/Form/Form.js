import React, { Component } from 'react';
import Button from '../Button';
import { v4 as uuidv4 } from 'uuid';
import styles from './Form.module.css';

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
    const {
      addContactOnPhonebook,
      onChangeInput,
      state: { name, number },
    } = this;
    return (
      <form className={styles.form} onSubmit={addContactOnPhonebook}>
        <div className={styles.container}>
          <input
            id="name"
            className={styles.input}
            value={name}
            placeholder=" "
            onChange={onChangeInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <label className={styles.label} htmlFor="name">
            Name
          </label>
        </div>
        <div className={styles.container}>
          <input
            id="number"
            className={styles.input}
            type="tel"
            value={number}
            placeholder=" "
            onChange={onChangeInput}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <label className={styles.label} htmlFor="number">
            Number
          </label>
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
