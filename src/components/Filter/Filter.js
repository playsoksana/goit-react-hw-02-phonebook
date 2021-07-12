import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, filterContacts }) => (
  <input
    className={styles.search}
    value={value}
    onChange={filterContacts}
    placeholder="enter"
  />
);

export default Filter;
