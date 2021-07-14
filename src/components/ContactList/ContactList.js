import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

class ContactList extends Component {
  state = {};

  render() {
    const { deleteContactOnClick, contactsRender } = this.props;

    return contactsRender.length ? (
      <ul className={styles.contacts}>
        {contactsRender.map(({ name, number, id }) => (
          <li className={styles.item} key={id}>
            <p className={styles.name}>{name}:</p>
            <p className={styles.number}>{number}</p>
            <button
              className={styles.button}
              onClick={() => {
                deleteContactOnClick(id);
              }}
              type="button"
            >
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <>
        <p className={styles.notification}>"The phone book is empty"</p>
        <img
          src="https://homsk.com/upload/media/posts/2020-05/16/krik-mona-liza-i-dr-o-chem-rasskazyvayut-samye-smeshnye-memy-po-motivam-shedevrov-izobrazitelnogo-iskusstva_1589644460-b.jpg"
          alt="a cat and woman"
        ></img>
      </>
    );
  }
}

ContactList.propTypes = {
  contactsRender: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteContactOnClick: PropTypes.func.isRequired,
};

export default ContactList;
