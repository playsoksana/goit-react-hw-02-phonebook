import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul className={styles.contacts}>
    {contacts.map(({ name, number, id }) => (
      <li className={styles.item} key={id}>
        <p className={styles.name}>{name}:</p>
        <p className={styles.number}>{number}</p>
        <button className={styles.button} type="button">
          {' '}
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
