import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, filterContacts }) => (
  <label className={styles.label}>
    Find contact by name
    <input
      className={styles.search}
      value={value}
      onChange={filterContacts}
      placeholder="Enter"
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  filterContacts: PropTypes.func.isRequired,
};

export default Filter;
